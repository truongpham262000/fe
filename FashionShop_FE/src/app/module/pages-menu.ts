import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Thông tin',
    icon: 'home-outline',
    link: 'admin',
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
        link: 'category-product/category',
      },
      {
        title: 'Kích thước',
        icon: 'scissors-outline',
        link: 'category-product/size-product',
      },
      {
        title: 'Khuyến mãi',
        icon: 'percent-outline',
        link: 'category-product/sales',
      },
      {
        title: 'Phản hồi sản phẩm',
        icon: 'message-circle-outline',
        link: 'category-product/comments',
      },
      {
        title: 'Sản phẩm yêu thích',
        icon: 'heart-outline',
        link: 'category-product/favorites',
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
        link: 'cart-products/cart',
      },
      {
        title: 'Chi tiết giỏ hàng',
        icon: 'swap-outline',
        link: 'cart-products/cart-Items',
      },
      {
        title: 'Mã giảm giá',
        icon: 'clipboard-outline',
        link: 'cart-products/coupon',
      },
      {
        title: 'Thanh toán',
        icon: 'car-outline',
        link: 'cart-products/payments',
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
        link: 'setting-user/user',
      },
      {
        title: 'Phân quyền người dùng',
        icon: 'shield-outline',
        link: 'setting-user/roles',
      },
      {
        title: 'Phản hồi người dùng',
        icon: 'message-square-outline',
        link: 'setting-user/feed-back',
      },
    ],
  },
];
