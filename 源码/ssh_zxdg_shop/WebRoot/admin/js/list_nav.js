var t;


t=outlookbar.addtitle('修改密码')
outlookbar.additem('密码修改',t,'/ssh_zxdg_shop/admin/userinfo/userPw.jsp')


t=outlookbar.addtitle('用户管理')
outlookbar.additem('用户管理',t,'/ssh_zxdg_shop/userMana.action')

t=outlookbar.addtitle('蛋糕类别')
outlookbar.additem('类别管理',t,'/ssh_zxdg_shop/catelogMana.action')
outlookbar.additem('添加类别',t,'/ssh_zxdg_shop/admin/catelog/catelogAdd.jsp')

t=outlookbar.addtitle('蛋糕管理')
outlookbar.additem('蛋糕管理',t,'/ssh_zxdg_shop/goodsMana.action')
outlookbar.additem('添加蛋糕',t,'/ssh_zxdg_shop/admin/goods/goodsAdd.jsp')


t=outlookbar.addtitle('订单管理')
outlookbar.additem('订单管理',t,'/ssh_zxdg_shop/orderMana.action')

t=outlookbar.addtitle('网站论坛')
outlookbar.additem('网站论坛',t,'/ssh_zxdg_shop/liuyanMana.action')


t=outlookbar.addtitle('公告管理')
outlookbar.additem('公告管理',t,'/ssh_zxdg_shop/gonggaoMana.action')
outlookbar.additem('公告添加',t,'/ssh_zxdg_shop/admin/gonggao/gonggaoAdd.jsp')


t=outlookbar.addtitle('退出系统') 
outlookbar.additem('安全退出',t,'/ssh_zxdg_shop/login.jsp')