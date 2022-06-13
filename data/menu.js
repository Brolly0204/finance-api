module.exports = [{
  "path": "/isystem",
  name: '系统管理',
  meta: {
    title: '系统管理',
    icon: 'setting'
  },
  "children": [{
    path: "/isystem/user-manager",
    meta: {
      icon: 'user',
      "title": "用户管理"
    },
    name: "isystem-user",
    id: "3f915b2769fc80648e92d04e84ca059d"
  }, {
    path: "/isystem/menu-manager?type=1&channel=syrjia",
    meta: {
      icon: 'menu',
      title: "菜单管理"
    },
    name: "menu-manager"
  }, {
    path: "/isystem/role-manager",
    meta: {
      icon: 'team',
      title: "角色管理"
    },
    name: "isystem-roleUserList",
  }, {
    "path": "/isystem/menu-manager2",
    "meta": {
      icon: 'menu',
      "title": "菜单管理2"
    },
    "name": "isystem-newPermissionList",
  }]
}, {
  // 财务
  path: '/finance',
  name: '财务管理',
  meta: {
    title: '财务管理',
    icon: 'dashboard'
  },
  redirect: '/finance/clinic-kangren',
  children: [{ // 规则设置
    path: '/finance/rule',
    name: 'rule',
    redirect: '/finance/rule/income',
    meta: {
      title: '规则设置',
      icon: 'dashboard'
    },
    children: [{
      path: '/finance/rule/income',
      name: 'incomeRule',
      meta: {
        title: '收益规则设置',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/rule/team',
      name: 'teamDivideRule',
      meta: {
        title: '团队分成规则设置',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/rate?userId=f14407808d4d4fb3b78c4e4c87480ff5',
      name: 'serviceTaxRate',
      meta: {
        title: '劳务税率配置',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/settlement-config',
      name: 'SettlementConfig',
      meta: {
        title: '结算比例设置',
        icon: 'dashboard'
      },
    }]
  }, {
    path: '/finance/clinic-kangren',
    name: 'clinic-kangren',
    redirect: '/finance/clinic-kangren/record-statement',
    meta: {
      title: '诊所-康仁堂模块',
      icon: 'dashboard'
    },
    children: [{
        path: '/finance/clinic-kangren/record-statement',
        name: '上医对账报表',
        meta: {
          title: '上医对账报表',
          icon: 'dashboard'
        }
      }, {
        path: 'https://www.baidu.com/',
        name: '百度',
        meta: {
          title: '百度',
          icon: 'link',
          target: true
        }
      },
      // {
      //   path: '/finance/clinic-kangren/account',
      //   name: 'KrtAccount',
      //   query: {
      //     clinicType: 1
      //   },
      //   meta: {
      //     title: '诊所-康仁堂账户',
      //     icon: 'dashboard'
      //   },
      // }
    ]
  }, { // 财务报表
    path: '/finance/settlement-report',
    name: 'settlement-report',
    redirect: '/finance/settlement-report/order-up-perf',
    meta: {
      title: '财务报表',
      icon: 'dashboard'
    },
    children: [{ // 平台结算报表 优化
      path: '/finance/settlement-report/order-up-perf',
      name: 'OrderUpPerf',
      meta: {
        title: '平台结算报表(优化)',
        icon: 'dashboard'
      },
    }, { // 分成结算报表 优化
      path: '/finance/settlement-report/divide',
      name: 'Divide',
      meta: {
        title: '分成结算报表(优化)',
        icon: 'dashboard'
      },
    }, { // 预约挂号
      path: '/finance/settlement-report/appointmentRegister',
      name: 'appointmentRegister',
      meta: {
        title: '预约挂号报表',
        icon: 'dashboard'
      },
    }, { // 医珍堂结算报表 优化
      path: '/finance/settlement-report/yzt-settlement-statement',
      name: 'yztSettlementStatement',
      meta: {
        title: '医珍堂结算报表(优化)',
        icon: 'dashboard'
      }
    }, { //  财务挂账核销
      path: '/finance/settlement-report/financial-write-off',
      name: 'financialWriteOff',
      meta: {
        title: '财务挂账核销',
        icon: 'dashboard'
      }
    }, {
      path: '/finance/clinic-shangyi/write-off-clinic',
      name: 'write-off-clinic',
      query: {
        type: 1,
        titleType: 3,
      },
      meta: {
        title: '诊所挂账核销',
        icon: 'dashboard'
      },
    }, { //  阿米巴奖励结算
      path: '/finance/settlement-report/sale-cash',
      name: 'saleCash',
      meta: {
        title: '奖励结算表',
        icon: 'dashboard'
      }
    }, { //  渠道结算报表
      path: '/finance/settlement-report/channel-pipeline',
      name: 'channelPipeline',
      meta: {
        title: '渠道结算报表',
        icon: 'dashboard'
      },
    }, { //  医珍堂合作平台结算
      path: '/finance/settlement-report/yzt-cooperate-report',
      name: 'yztCooperateReport',
      meta: {
        title: '医珍堂合作平台结算',
        icon: 'dashboard'
      },
    }, { //  供应商结算报表
      path: '/finance/settlement-report/supplier-order',
      name: 'supplierOrder',
      meta: {
        title: '供应商结算报表',
        icon: 'dashboard'
      },
    }, { //  商城结算报表
      path: '/finance/settlement-report/mall-order',
      name: 'mallOrder',
      meta: {
        title: '商城结算报表',
        icon: 'dashboard'
      },
    }, { // MCN结算报表
      path: '/finance/settlement-report/order-up-mcn',
      name: 'orderUpMCN',
      meta: {
        title: '平台结算报表(MCN)',
        icon: 'dashboard'
      },
    }, { // 专科项目分成报表
      path: '/finance/settlement-report/league-team-dvided',
      name: 'leagueTeamDvided',
      meta: {
        title: '专科项目分成报表',
        icon: 'dashboard'
      },
    }, { // 红康云结算报表(新)
      path: '/finance/settlement-report/hkysettlement',
      name: 'hkysettlement',
      meta: {
        title: '红康云结算报表(新)',
        icon: 'dashboard'
      },
    }, { // 医珍堂结算报表(新)
      path: '/finance/settlement-report/yztSettlementNew',
      name: 'yztSettlementNew',
      meta: {
        title: '医珍堂结算报表(新)',
        icon: 'dashboard'
      },
    }, { // 平台结算报表 新
      path: '/finance/settlement-report/order-up-new',
      name: 'OrderUpNew',
      meta: {
        title: '平台结算报表(新)',
        icon: 'dashboard'
      },
    }, ]
  }, { // 诊所-上医模块
    path: '/finance/clinic-shangyi',
    name: 'clinic-shangyi',
    redirect: '/finance/clinic-shangyi/write-off-join',
    meta: {
      title: '诊所-上医模块',
      icon: 'dashboard'
    },
    children: [{
      path: '/finance/clinic-shangyi/write-off-join',
      name: 'write-off-join',
      meta: {
        title: '加盟诊所挂账核销',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/write-off-clinic',
      name: 'write-off-clinic',
      query: {
        type: 1,
        titleType: 3,
      },
      meta: {
        title: '诊所挂账核销',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/account-period',
      name: 'account-period',
      meta: {
        title: '基础设置-账期设置',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/krt-settlement-report',
      name: 'krt-settlement-report',
      meta: {
        title: '康仁堂结算报表',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/krt-settlement-report-detail',
      name: 'KrtReportFormDetail',
      hidden: true,
      hiddenHeaderContent: true,
      meta: {
        title: '上医-康仁堂对账报表详情',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/yzt-settlement-report',
      name: 'yzt-settlement-report',
      query: {
        type: 2,
        code: 2
      },
      meta: {
        title: '医珍堂结算报表',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/sy-clinic-detail',
      name: 'SyClinicDetail',
      meta: {
        title: '诊所结算报表',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-kangren/clinic-account',
      name: 'ClinicAccount',
      query: {
        clinicType: 2
      },
      meta: {
        title: '诊所-上医账户',
        icon: 'dashboard'
      },
    }]
  }, { // 诊所-医珍堂模块
    path: '/finance/clinic-yzt',
    name: 'clinic-yzt',
    redirect: '/finance/clinic-shangyi/shangyi-report',
    meta: {
      title: '诊所-医珍堂模块',
      icon: 'dashboard'
    },
    children: [{
      path: '/finance/clinic-shangyi/shangyi-report',
      name: 'shangyi-report',
      query: {
        type: 3,
        code: 2
      },
      meta: {
        title: '上医对账报表',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-kangren/clinic-yzt-account',
      name: 'ClinicYztAccount',
      query: {
        clinicType: 3
      },
      meta: {
        title: '诊所-医珍堂账户',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/clinic-shangyi/yzt-write-off-clinic',
      name: 'yzt-write-off-clinic',
      query: {
        type: 2,
        titleType: 5,
      },
      meta: {
        title: '医珍堂挂账核销',
        icon: 'dashboard'
      },
    }, ]
  }, { // 财务对账功能
    path: '/finance/bill',
    name: 'bill',
    redirect: '/finance/bill/day',
    meta: {
      title: '财务对账功能',
      icon: 'dashboard'
    },
    children: [{
      path: '/finance/bill/day',
      name: 'DailyBill',
      meta: {
        title: '日账单',
        icon: 'dashboard'
      },
    }, {
      path: '/finance/bill/month',
      name: 'MonthlyBill',
      meta: {
        title: '月账单',
        icon: 'dashboard'
      },
    }, ]
    // }, { // 银行卡信息
    //   path: '/finance/bank',
    //   name: 'bank',
    //   redirect: '/finance/bank/card',
    //   meta: {
    //     title: '银行卡',
    //     icon: 'dashboard'
    //   },
    //   children: [{
    //     path: '/finance/bank/card',
    //     name: 'BankCard',
    //     meta: {
    //       title: '银行卡信息',
    //       icon: 'dashboard'
    //     },
    //   }, {
    //     path: '/finance/bank/history',
    //     name: 'BankHistoryRecord',
    //     hidden: true,
    //     meta: {
    //       title: '历史记录',
    //       icon: 'dashboard'
    //     },
    //   }]
    // }, { // 规则设置
    //   path: '/finance/rule',
    //   name: 'rule',
    //   redirect: '/finance/rule/income',
    //   meta: {
    //     title: '规则设置',
    //     icon: 'dashboard'
    //   },
    //   children: [{
    //     path: '/finance/rule/income',
    //     name: 'incomeRule',
    //     meta: {
    //       title: '收益规则设置',
    //       icon: 'dashboard'
    //     },
    //   }, {
    //     path: '/finance/rule/team',
    //     name: 'teamDivideRule',
    //     meta: {
    //       title: '团队分成规则设置',
    //       icon: 'dashboard'
    //     },
    //   }]
    // }, { // 医珍堂对账
    //   path: '/finance/yzt/reconciliation',
    //   name: 'yzt',
    //   meta: {
    //     title: '医珍堂对账',
    //     icon: 'dashboard'
    //   }
    // }, {
    //   path: '/finance/yzt/detail',
    //   name: 'yztDetail',
    //   hidden: true,
    //   meta: {
    //     title: '对账单详情',
    //     icon: 'dashboard'
    //   }
    // }, { // 红康云对账
    //   path: '/finance/hky/reconciliation',
    //   name: 'hky',
    //   meta: {
    //     title: '红康云对账',
    //     icon: 'dashboard'
    //   }
    // }, { // 赔款记录
    //   path: '/finance/reparations/record',
    //   name: 'ReconciliationRecord',
    //   meta: {
    //     title: '赔款记录',
    //     icon: 'dashboard'
    //   },
    // }, {
    //   path: '/finance/refund/review',
    //   name: 'refundReview',
    //   meta: {
    //     title: '退款审核(财务)',
    //     icon: 'dashboard'
    //   },
    // }, {
    //   path: '/finance/settlement/audit',
    //   name: 'settlementAudit',
    //   meta: {
    //     title: '财务审计报表',
    //     icon: 'dashboard'
    //   },
    // }, {
    //   path: '/finance/drug-order/yzt-statement',
    //   name: 'drugOrderYztStatement',
    //   meta: {
    //     title: '医珍堂调理单统计',
    //     icon: 'dashboard'
    //   },
    // }, {
    //   path: '/finance/refund/offline-record',
    //   name: 'offlineRecord',
    //   meta: {
    //     title: '线下退款记录',
    //     icon: 'dashboard'
    //   },
  }]
}]
