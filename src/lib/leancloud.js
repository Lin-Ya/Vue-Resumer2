import AV from 'leancloud-storage'


// 设置你的app的id和key，在自己的leancloud控制台里面新建应用（免费），然后拷贝过来
var APP_ID = '0byl3BckU1qsECMJhwrCs3hR-gzGzoHsz';
var APP_KEY = 'EbrS4vDhR6kt7l8vEYEk4ziF';

//初始化
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default AV;