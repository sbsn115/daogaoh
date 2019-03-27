import index from '@/components/index'
import dataMange from '@/components/dataMange/data'
import product from '@/components/product/productMange'
import shopCar from '@/components/shop_car/shopCar'
import order from '@/components/order/order'

import client from '@/components/khgl/kehuxinxi'
import discount from '@/components/khgl/youhujuan'

import staff from '@/components/staff/staff'

import release from '@/components/release/release'
import see from '@/components/see/see'

import contact from '@/components/contact/Contact'

import qxgl from '@/components/qxgl/qxgl'

import grzx from '@/components/grzx/grzx'

export default [
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
      path: '/dataMange',
      name: 'dataMange',
      component: dataMange
    }, {
      path: '/product',
      name: 'product',
      component: product
    }, {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    }, {
      path: '/order',
      name: 'order',
      component: order
    }, {
      path: '/client',
      name: 'client',
      component: client
    }, {
      path: '/discount',
      name: 'discount',
      component: discount
    }, {
      path: '/staff',
      name: 'staff',
      component: staff
    }, {
      path: '/release',
      name: 'release',
      component: release
    }, {
      path: '/see',
      name: 'see',
      component: see
    }, {
      path: '/contact',
      name: 'contact',
      component: contact
    }, {
      path: '/qxgl',
      name: 'qxgl',
      component: qxgl
    }, {
      path: '/grzx',
      name: 'grzx',
      component: grzx
    },
    ]
  }
]

