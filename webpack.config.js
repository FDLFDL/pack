module.exports = {
  //entry:"./app/index.js", //入口文件
  entry:{
    //将a和b同时打包在一起生成index
    ab:["./app/a.js","./app/b.js"],
    bundle:'./app/index.js'
  },
  output:{                //出口文件
    path:'./build/',      //生产的目录
    //[name]装的就是entry里的名字
    filename:'[name].js'  //生产的文件名字
  },
  module:{   //模块的导入方式
    loaders:[ //所有的加载器
        //匹配所有的css进行css和style的配置
        {test:/\.css$/,loaders:["style","css"]}
    ]
  },
  //在编写的时候去掉后缀名
  resolve:{
      //扩展
      extensions:["",".js",".css",".jsx"],
      //配置名称简写
      alias:{
        pack:'./a/n/index.js'
      }
  }
}
