import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Thông tin',
    icon: 'home-outline',
    link: '/pages',
    home: true,
  },
  {
    title: 'Hiển thị slide',
    icon: 'archive-outline',
    children: [
      {
        title: 'Slide ảnh',
        icon: 'image-outline',
        link: 'show-about/slider',
      },
      {
        title: 'Bài viết',
        icon: 'book-open-outline',
        link: 'show-about/abouts',
      },
    ],
  },
  {
    title: 'Danh mục sản phẩm',
    icon: 'grid-outline',
    children: [
      {
        title: 'Sản phẩm',
        icon: 'shopping-bag-outline',
        link: 'category-product/products',
      },
      {
        title: 'Danh mục',
        icon: 'options-2-outline',
        link: '/pages/category',
      },
      {
        title: 'Kích thước',
        icon: 'scissors-outline',
        link: '/pages/size-product',
      },
      {
        title: 'Phản hồi sản phẩm',
        icon: 'message-circle-outline',
        link: '/pages/comments',
      },
      {
        title: 'Sản phẩm yêu thích',
        icon: 'heart-outline',
        link: '/pages/favorites',
      },
    ],
  },
  {
    title: 'Thông tin giỏ hàng',
    icon: 'info-outline',
    children: [
      {
        title: 'Giỏ hàng',
        icon: 'shopping-cart-outline',
        link: '/pages/cart',
      },
      {
        title: 'Chi tiết giỏ hàng',
        icon: 'swap-outline',
        link: '/pages/CartItem',
      },
      {
        title: 'Mã giảm giá',
        icon: 'clipboard-outline',
        link: '/pages/coupon',
      },
      {
        title: 'Thanh toán',
        icon: 'car-outline',
        link: '/pages/payment',
      },
    ],
  },
  {
    title: 'Cài đặt người dùng',
    icon: 'settings-outline',
    children: [
      {
        title: 'Người dùng',
        icon: 'people-outline',
        link: '/pages/user',
      },
      {
        title: 'Phân quyền người dùng',
        icon: 'shield-outline',
        link: '/pages/roles',
      },
      {
        title: 'Phản hồi người dùng',
        icon: 'message-square-outline',
        link: '/pages/feedback',
      },
    ],
  },
];
