module.exports = (app,express) => {
    const template = require('fs').readFileSync('./src/index.template.html', 'utf-8');
    const serverBundle = require('./public/vue-ssr-server-bundle.json');
    const clientManifest = require('./public/vue-ssr-client-manifest.json');
    const { createBundleRenderer } = require('vue-server-renderer');
   
    const renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false, // recommended
        template, // (optional) page template
        clientManifest, // (optional) client build manifest
      });
      
      app.use(express.static('public'));
      app.get('*', (req, res) => {
     
        const context = {title:'hello' ,url: req.url }; 
       
        // No need to pass an app here because it is auto-created by
        // executing the bundle. Now our server is decoupled from our Vue app!
        renderer.renderToString(context, (err, html) => {
          console.log(context)
          if (err) { 
            console.error(err);
            if (err.code === 404) {
              res.status(404).end('Page not found');
            } else {
              res.status(500).end('Internal Server Error');
            }
          } else { 
            res.end(html);
          }
        });
      });
      

}