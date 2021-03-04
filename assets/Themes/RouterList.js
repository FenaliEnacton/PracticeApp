import { AppImage } from '../Images';
export const routerList = [
  {
    id: 11,
    title: 'home',
    route: 'Home',
    icon: AppImage.route_Home_selected,
  },
  {
    id: 12,
    title: 'stores',
    route: 'AllStores',
    icon: AppImage.store_menu_icon,
  },
  {
    id: 12,
    title: 'daily_deals',
    route: 'AllDeals',
    icon: AppImage.store_menu_icon,
  },
  // {
  //   id: 13,
  //   title: 'my_account',
  //   member_access: true,
  //   icon: AppImage.route_UserDashboard_selected,
  //   child_routes: [
  //     {
  //       id: 14,
  //       title: 'my_account',
  //       is_parent_first: true,
  //       icon: AppImage.route_UserDashboard_selected,
  //     },
  //     {
  //       id: 15,
  //       title: 'overview',
  //       route: 'UserDashboard',
  //       icon: AppImage.route_UserDashboard_selected,
  //     },
  //     {
  //       id: 16,
  //       title: 'cashback_activities',
  //       icon: AppImage.cashback_activities,
  //       route: 'Clicks',
  //     },
  //     {
  //       id: 17,
  //       title: 'cashback_payment',
  //       icon: AppImage.cashback_payment,
  //       route: 'CashbackPayment',
  //     },
  //     {
  //       id: 18,
  //       title: 'missing_cashback',
  //       icon: AppImage.missing_cashback,
  //       route: 'MissingClaims',
  //     },
  //     {
  //       id: 19,
  //       title: 'fav',
  //       route: 'Favorites',
  //       icon: AppImage.favorite,
  //     },
  //     {
  //       id: 20,
  //       title: 'refer_n_earn',
  //       icon: AppImage.refer_n_earn_nav_icon,
  //       route: 'ReferNEarn',
  //     },
  //     {
  //       id: 21,
  //       title: 'share_n_earn',
  //       icon: AppImage.share_n_earn_icon,
  //       route: 'ShareNEarn',
  //     },
  //     {
  //       id: 22,
  //       title: 'account_settings',
  //       icon: AppImage.account_settings_icon,
  //       route: 'AccountSettings',
  //     },
  //   ],
  // },
  {
    id: 23,
    title: 'categories',
    // route: 'UserDashboard',
    icon: AppImage.all_cat_nav_icon,
    child_routes: [
      {
        id: 24,
        title: 'categories',
        is_parent_first: true,
        // route: 'UserDashboard',
        icon: AppImage.all_cat_nav_icon,
      },
      {
        id: 25,
        title: 'store_categories',
        route: 'AllStoreCategories',
        icon: AppImage.store_cat_nav_icon,
      },
      {
        id: 26,
        title: 'coupon_categories',
        route: 'AllCouponCategories',
        icon: AppImage.offer_cat_nav_icon,
      },
      {
        id: 27,
        title: 'deal_categories',
        route: 'AllDealsCategories',
        icon: AppImage.offer_cat_nav_icon,
      },
    ],
  },
  {
    id: 28,
    title: 'refer_n_earn',
    route: 'ReferNEarn',
    icon: AppImage.refer_n_earn_nav_icon,
  },
  {
    id: 29,
    title: 'share_n_earn',
    route: 'ShareNEarn',
    icon: AppImage.share_n_earn_icon,
  },
  {
    id: 30,
    title: 'about_us',
    icon: AppImage.about_us_nav_icon,
    child_routes: [
      {
        id: 31,
        title: 'about_us',
        is_parent_first: true,
        icon: AppImage.about_us_nav_icon,
      },
      {
        id: 32,
        title: 'about_company',
        route: 'AboutUs',
        icon: AppImage.about_us_nav_icon,
      },
      {
        id: 33,
        title: 'privacy_policy',
        route: 'PrivacyPolicy',
        icon: AppImage.privacy_policy_nav_icon,
      },
      {
        id: 34,
        title: 'terms_of_use',
        route: 'TermsOfUse',
        icon: AppImage.terms_nav_icon,
      },
    ],
  },
  {
    id: 35,
    title: 'help',
    icon: AppImage.help_nav_icon,
    child_routes: [
      {
        id: 36,
        title: 'help',
        icon: AppImage.help_nav_icon,
        is_parent_first: true,
      },
      {
        id: 37,
        title: 'how_it_works',
        route: 'HowItWorks',
        icon: AppImage.hiw_nav_icon,
      },
      {
        id: 38,
        title: 'faqs',
        route: 'FAQs',
        icon: AppImage.help_nav_icon,
      },
      {
        id: 39,
        title: 'contact_us',
        route: 'ContactUs',
        icon: AppImage.contact_us_nav_icon,
      },
    ],
  },
  {
    id: 40,
    title: 'change_language',
    route: 'LanguageSelect',
    icon: AppImage.change_language_1,
  },
  // {
  //   id: 41,
  //   title: 'log_out',
  //   member_access: true,
  //   icon: AppImage.log_out_nav_icon,
  // },
];

const NavList = [
  {
    id: 111,
    title: 'cashback_activities',
    image: AppImage.cashback_activities,
    route: 'Clicks',
  },
  {
    id: 222,
    title: 'cashback_payment',
    image: AppImage.cashback_payment,
    route: 'CashbackPayment',
  },
  {
    id: 333,
    title: 'missing_cashback',
    image: AppImage.missing_cashback,
    route: 'MissingClaims',
  },
  {
    id: 444,
    title: 'fav',
    route: 'Favorites',
    image: AppImage.favorite,
  },
  {
    id: 555,
    title: 'refer_n_earn',
    image: AppImage.refer_n_earn_nav_icon,
    route: 'ReferNEarn',
  },
  {
    id: 666,
    title: 'share_n_earn',
    image: AppImage.share_n_earn_icon,
    route: 'ShareNEarn',
  },
  {
    id: 999,
    title: 'account_settings',
    image: AppImage.account_settings_icon,
    route: 'AccountSettings',
  },
  {
    id: 777,
    title: 'faqs',
    image: AppImage.help_nav_icon,
    route: 'FAQs',
  },
  {
    id: 888,
    title: 'contact_us',
    route: 'ContactUs',
    image: AppImage.contact_us_nav_icon,
  },
  {
    id: 1000,
    title: 'log_out',
    image: AppImage.log_out_nav_icon,
  },
];

const UserRoutes = [
  {
    id: 1111,
    title: 'clicks',
    route: 'Clicks',
  },
  {
    id: 2222,
    title: 'shopping',
    route: 'Shopping',
  },
  {
    id: 3333,
    title: 'referral',
    route: 'Referral',
  },
  {
    id: 4444,
    title: 'bonus',
    route: 'Bonus',
  },
  {
    id: 5555,
    title: 'cashback_payment_history',
    route: 'CashbackPaymentHistory',
  },
  {
    id: 6666,
    title: 'cashback_payment',
    route: 'CashbackPayment',
  },
  {
    id: 7777,
    title: 'create_new_claim',
    route: 'CreateClaim',
  },
  {
    id: 8888,
    title: 'personal_information',
    route: 'personal_information',
  },
  {
    id: 9999,
    title: 'change_password',
    route: 'change_password',
  },
  {
    id: 10000,
    title: 'email',
    route: 'email',
  },
  {
    id: 10001,
    title: 'mobile_number',
    route: 'mobile_number',
  },
  {
    id: 10002,
    title: 'view_all_claims',
    route: 'MissingClaims',
  },
  {
    id: 10003,
    title: 'your_referral_activities',
    route: 'ReferralActivities',
  },
  {
    id: 10004,
    title: 'invited_users',
    route: 'ReferralInvites',
  },
  {
    id: 10005,
    title: 'refer_n_earn',
    route: 'ReferNEarn',
  },
  {
    id: 10006,
    title: 'share_n_earn_history',
    route: 'ShareNEarnHistory',
  },
  {
    id: 10007,
    title: 'share_n_earn',
    route: 'ShareNEarn',
  },
  {
    id: 10008,
    title: 'view_all_claims',
    route: 'MissingClaims',
  },
];

export const get_nav_list = (required_routes) => {
  return NavList.filter(function (element) {
    return this.indexOf(element.id) !== -1;
  }, required_routes);
};

export const get_user_internal_nav_list = (required_routes) => {
  return UserRoutes.filter(function (element) {
    return this.indexOf(element.id) !== -1;
  }, required_routes);
};

export const get_route_name = (slug) => {
  const routes = {
    'all-stores': 'AllStores',
    'daily-deals': 'AllDeals',
    'all-store-categories': 'AllStoreCategories',
    'all-coupon-categories': 'AllCouponCategories',
    'coupon-category': 'CouponCatDetails',
    'store-category': 'StoreCatDetail',
    store: 'StoreDetails',
  };
  return routes[slug];
};
