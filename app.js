const express =require('express')
const app = express()
const port = process.env.PORT || 3003  
app.use(express.json())
app.use(require('cors')())
//ssr 渲染页面
app.get('/api',async(req,res)=>{
    await res.send('ok')
})
require('./ssr')(app,express)
app.listen(port,()=>{
 console.log(`http://localhost:${port}`)
}) 