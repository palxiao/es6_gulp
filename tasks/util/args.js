import yargs from 'yargs';

const args = yargs

  .option('production',{
    boolean:true,
    default:false,
    describe:'压缩代码'
  })

  .option('watch',{
    boolean:true,
    default:false,
    describe:'监听文件变动'
  })

  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log日志'
  })

  .option('sourcemaps',{
    describe:'强制创建sroucemaps'
  })

  .option('port',{
    string:true,
    default:8080,
    describe:'服务端口设置'
  })

  .argv

export default args;
