import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CalendarDay: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type Banner = {
  __typename?: 'Banner';
  head?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BannerCreateInput = {
  head?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BannerOrderByInput = {
  head?: InputMaybe<OrderDirection>;
  href?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  subtitle?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type BannerUpdateArgs = {
  data: BannerUpdateInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpdateInput = {
  head?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BannerWhereInput = {
  AND?: InputMaybe<Array<BannerWhereInput>>;
  NOT?: InputMaybe<Array<BannerWhereInput>>;
  OR?: InputMaybe<Array<BannerWhereInput>>;
  head?: InputMaybe<StringFilter>;
  href?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CalendarDayFilter = {
  equals?: InputMaybe<Scalars['CalendarDay']['input']>;
  gt?: InputMaybe<Scalars['CalendarDay']['input']>;
  gte?: InputMaybe<Scalars['CalendarDay']['input']>;
  in?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
  lt?: InputMaybe<Scalars['CalendarDay']['input']>;
  lte?: InputMaybe<Scalars['CalendarDay']['input']>;
  not?: InputMaybe<CalendarDayFilter>;
  notIn?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  variant?: Maybe<ProductVariant>;
};

export type CartItemCreateInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForCreateInput>;
};

export type CartItemManyRelationFilter = {
  every?: InputMaybe<CartItemWhereInput>;
  none?: InputMaybe<CartItemWhereInput>;
  some?: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
};

export type CartItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForUpdateInput>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  quantity?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
  variant?: InputMaybe<ProductVariantWhereInput>;
};

export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type CategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type CategoryProductsCountArgs = {
  where?: ProductWhereInput;
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
};

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_space?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  default_image?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['String']['input']>;
  density?: InputMaybe<Scalars['String']['input']>;
  dpr?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fetch_format?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  gravity?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  opacity?: InputMaybe<Scalars['String']['input']>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  transformation?: InputMaybe<Scalars['String']['input']>;
  underlay?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  zoom?: InputMaybe<Scalars['String']['input']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  publicUrlTransformed?: Maybe<Scalars['String']['output']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type ConfirmPaymentAndCreateOrderResult = {
  __typename?: 'ConfirmPaymentAndCreateOrderResult';
  client_secret?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  status: PaymentIntentStatus;
};

export type Coupon = {
  __typename?: 'Coupon';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  minimumPurchaseAmount?: Maybe<Scalars['Int']['output']>;
  usageLimit?: Maybe<Scalars['Int']['output']>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type CouponCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  minimumPurchaseAmount?: InputMaybe<Scalars['Int']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CouponOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discountType?: InputMaybe<OrderDirection>;
  discountValue?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  minimumPurchaseAmount?: InputMaybe<OrderDirection>;
  usageLimit?: InputMaybe<OrderDirection>;
  validFrom?: InputMaybe<OrderDirection>;
  validUntil?: InputMaybe<OrderDirection>;
};

export type CouponUpdateArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};

export type CouponUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  minimumPurchaseAmount?: InputMaybe<Scalars['Int']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CouponWhereInput = {
  AND?: InputMaybe<Array<CouponWhereInput>>;
  NOT?: InputMaybe<Array<CouponWhereInput>>;
  OR?: InputMaybe<Array<CouponWhereInput>>;
  code?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  discountType?: InputMaybe<StringFilter>;
  discountValue?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  minimumPurchaseAmount?: InputMaybe<IntFilter>;
  usageLimit?: InputMaybe<IntFilter>;
  validFrom?: InputMaybe<DateTimeFilter>;
  validUntil?: InputMaybe<DateTimeFilter>;
};

export type CouponWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePaymentIntentResult = {
  __typename?: 'CreatePaymentIntentResult';
  client_secret?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status: PaymentIntentStatus;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

/**  Min/Max Price  */
export type MinMax = {
  __typename?: 'MinMax';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Add an item to a cart, remove if quantity = 0  */
  addToCart?: Maybe<CartItem>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  /**  Confirm a payment intent and create an order  */
  confirmPaymentAndCreateOrder?: Maybe<ConfirmPaymentAndCreateOrderResult>;
  createBanner?: Maybe<Banner>;
  createBanners?: Maybe<Array<Maybe<Banner>>>;
  createCartItem?: Maybe<CartItem>;
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createCategories?: Maybe<Array<Maybe<Category>>>;
  createCategory?: Maybe<Category>;
  createCoupon?: Maybe<Coupon>;
  createCoupons?: Maybe<Array<Maybe<Coupon>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  createOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Create an payment intent  */
  createPaymentIntent?: Maybe<CreatePaymentIntentResult>;
  createProduct?: Maybe<Product>;
  createProductImage?: Maybe<ProductImage>;
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  createProductSnapshot?: Maybe<ProductSnapshot>;
  createProductSnapshots?: Maybe<Array<Maybe<ProductSnapshot>>>;
  createProductVariant?: Maybe<ProductVariant>;
  createProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBanner?: Maybe<Banner>;
  deleteBanners?: Maybe<Array<Maybe<Banner>>>;
  deleteCartItem?: Maybe<CartItem>;
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteCoupon?: Maybe<Coupon>;
  deleteCoupons?: Maybe<Array<Maybe<Coupon>>>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  deleteProduct?: Maybe<Product>;
  deleteProductImage?: Maybe<ProductImage>;
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  deleteProductSnapshot?: Maybe<ProductSnapshot>;
  deleteProductSnapshots?: Maybe<Array<Maybe<ProductSnapshot>>>;
  deleteProductVariant?: Maybe<ProductVariant>;
  deleteProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean']['output'];
  updateBanner?: Maybe<Banner>;
  updateBanners?: Maybe<Array<Maybe<Banner>>>;
  updateCartItem?: Maybe<CartItem>;
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  updateCategories?: Maybe<Array<Maybe<Category>>>;
  updateCategory?: Maybe<Category>;
  updateCoupon?: Maybe<Coupon>;
  updateCoupons?: Maybe<Array<Maybe<Coupon>>>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  updateProduct?: Maybe<Product>;
  updateProductImage?: Maybe<ProductImage>;
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  updateProductSnapshot?: Maybe<ProductSnapshot>;
  updateProductSnapshots?: Maybe<Array<Maybe<ProductSnapshot>>>;
  updateProductVariant?: Maybe<ProductVariant>;
  updateProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Validate a coupon against a user  */
  validateCoupon?: Maybe<ValidateCouponResult>;
};


export type MutationAddToCartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationConfirmPaymentAndCreateOrderArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  paymentIntentId: Scalars['String']['input'];
};


export type MutationCreateBannerArgs = {
  data: BannerCreateInput;
};


export type MutationCreateBannersArgs = {
  data: Array<BannerCreateInput>;
};


export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationCreateCartItemsArgs = {
  data: Array<CartItemCreateInput>;
};


export type MutationCreateCategoriesArgs = {
  data: Array<CategoryCreateInput>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCouponArgs = {
  data: CouponCreateInput;
};


export type MutationCreateCouponsArgs = {
  data: Array<CouponCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateOrderItemsArgs = {
  data: Array<OrderItemCreateInput>;
};


export type MutationCreateOrdersArgs = {
  data: Array<OrderCreateInput>;
};


export type MutationCreatePaymentIntentArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductImageArgs = {
  data: ProductImageCreateInput;
};


export type MutationCreateProductImagesArgs = {
  data: Array<ProductImageCreateInput>;
};


export type MutationCreateProductSnapshotArgs = {
  data: ProductSnapshotCreateInput;
};


export type MutationCreateProductSnapshotsArgs = {
  data: Array<ProductSnapshotCreateInput>;
};


export type MutationCreateProductVariantArgs = {
  data: ProductVariantCreateInput;
};


export type MutationCreateProductVariantsArgs = {
  data: Array<ProductVariantCreateInput>;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteBannerArgs = {
  where: BannerWhereUniqueInput;
};


export type MutationDeleteBannersArgs = {
  where: Array<BannerWhereUniqueInput>;
};


export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type MutationDeleteCartItemsArgs = {
  where: Array<CartItemWhereUniqueInput>;
};


export type MutationDeleteCategoriesArgs = {
  where: Array<CategoryWhereUniqueInput>;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type MutationDeleteCouponsArgs = {
  where: Array<CouponWhereUniqueInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteOrderItemsArgs = {
  where: Array<OrderItemWhereUniqueInput>;
};


export type MutationDeleteOrdersArgs = {
  where: Array<OrderWhereUniqueInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type MutationDeleteProductImagesArgs = {
  where: Array<ProductImageWhereUniqueInput>;
};


export type MutationDeleteProductSnapshotArgs = {
  where: ProductSnapshotWhereUniqueInput;
};


export type MutationDeleteProductSnapshotsArgs = {
  where: Array<ProductSnapshotWhereUniqueInput>;
};


export type MutationDeleteProductVariantArgs = {
  where: ProductVariantWhereUniqueInput;
};


export type MutationDeleteProductVariantsArgs = {
  where: Array<ProductVariantWhereUniqueInput>;
};


export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateBannerArgs = {
  data: BannerUpdateInput;
  where: BannerWhereUniqueInput;
};


export type MutationUpdateBannersArgs = {
  data: Array<BannerUpdateArgs>;
};


export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateCartItemsArgs = {
  data: Array<CartItemUpdateArgs>;
};


export type MutationUpdateCategoriesArgs = {
  data: Array<CategoryUpdateArgs>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCouponArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};


export type MutationUpdateCouponsArgs = {
  data: Array<CouponUpdateArgs>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateOrderItemsArgs = {
  data: Array<OrderItemUpdateArgs>;
};


export type MutationUpdateOrdersArgs = {
  data: Array<OrderUpdateArgs>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductImageArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};


export type MutationUpdateProductImagesArgs = {
  data: Array<ProductImageUpdateArgs>;
};


export type MutationUpdateProductSnapshotArgs = {
  data: ProductSnapshotUpdateInput;
  where: ProductSnapshotWhereUniqueInput;
};


export type MutationUpdateProductSnapshotsArgs = {
  data: Array<ProductSnapshotUpdateArgs>;
};


export type MutationUpdateProductVariantArgs = {
  data: ProductVariantUpdateInput;
  where: ProductVariantWhereUniqueInput;
};


export type MutationUpdateProductVariantsArgs = {
  data: Array<ProductVariantUpdateArgs>;
};


export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationValidateCouponArgs = {
  couponCode: Scalars['String']['input'];
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  charge?: Maybe<Scalars['String']['output']>;
  coupon?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['CalendarDay']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<OrderItem>>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};


export type OrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderItemWhereInput;
};


export type OrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};

export type OrderCreateInput = {
  charge?: InputMaybe<Scalars['String']['input']>;
  coupon?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['CalendarDay']['input']>;
  items?: InputMaybe<OrderItemRelateToManyForCreateInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
  price?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  snapshot?: Maybe<ProductSnapshot>;
  variant?: Maybe<ProductVariant>;
};

export type OrderItemCreateInput = {
  order?: InputMaybe<OrderRelateToOneForCreateInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  snapshot?: InputMaybe<ProductSnapshotRelateToOneForCreateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForCreateInput>;
};

export type OrderItemManyRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
};

export type OrderItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemUpdateArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateInput = {
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  snapshot?: InputMaybe<ProductSnapshotRelateToOneForUpdateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForUpdateInput>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<OrderWhereInput>;
  price?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  snapshot?: InputMaybe<ProductSnapshotWhereInput>;
  variant?: InputMaybe<ProductVariantWhereInput>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderManyRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderOrderByInput = {
  charge?: InputMaybe<OrderDirection>;
  coupon?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
};

export type OrderRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
};

export type OrderRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
};

export type OrderRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderUpdateArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateInput = {
  charge?: InputMaybe<Scalars['String']['input']>;
  coupon?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['CalendarDay']['input']>;
  items?: InputMaybe<OrderItemRelateToManyForUpdateInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  charge?: InputMaybe<StringFilter>;
  coupon?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CalendarDayFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<OrderItemManyRelationFilter>;
  total?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export enum PaymentIntentStatus {
  Canceled = 'CANCELED',
  Processing = 'PROCESSING',
  RequiresAction = 'REQUIRES_ACTION',
  RequiresCapture = 'REQUIRES_CAPTURE',
  RequiresConfirmation = 'REQUIRES_CONFIRMATION',
  RequiresPaymentMethod = 'REQUIRES_PAYMENT_METHOD',
  Succeeded = 'SUCCEEDED'
}

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  company?: Maybe<Scalars['String']['output']>;
  defaultVariantId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  highestPrice?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ProductImage>;
  lowestPrice?: Maybe<Scalars['Int']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<ProductVariant>;
  variants?: Maybe<Array<ProductVariant>>;
  variantsCount?: Maybe<Scalars['Int']['output']>;
};


export type ProductShortDescriptionArgs = {
  length?: Scalars['Int']['input'];
};


export type ProductVariantArgs = {
  skuId?: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantsArgs = {
  cursor?: InputMaybe<ProductVariantWhereUniqueInput>;
  orderBy?: Array<ProductVariantOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductVariantWhereInput;
};


export type ProductVariantsCountArgs = {
  where?: ProductVariantWhereInput;
};

export type ProductCreateInput = {
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  company?: InputMaybe<Scalars['String']['input']>;
  defaultVariantId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highestPrice?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ProductImageRelateToOneForCreateInput>;
  lowestPrice?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<ProductVariantRelateToManyForCreateInput>;
};

export type ProductDescriptor = {
  __typename?: 'ProductDescriptor';
  companies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  styles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
};

export type ProductImageOrderByInput = {
  alt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type ProductImageRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
};

export type ProductImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductImageUpdateArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};

export type ProductImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
};

export type ProductImageWhereInput = {
  AND?: InputMaybe<Array<ProductImageWhereInput>>;
  NOT?: InputMaybe<Array<ProductImageWhereInput>>;
  OR?: InputMaybe<Array<ProductImageWhereInput>>;
  alt?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
};

export type ProductImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  company?: InputMaybe<OrderDirection>;
  defaultVariantId?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  highestPrice?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lowestPrice?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  style?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type ProductRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductSnapshot = {
  __typename?: 'ProductSnapshot';
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductSnapshotCreateInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSnapshotOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
};

export type ProductSnapshotRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductSnapshotWhereUniqueInput>;
  create?: InputMaybe<ProductSnapshotCreateInput>;
};

export type ProductSnapshotRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductSnapshotWhereUniqueInput>;
  create?: InputMaybe<ProductSnapshotCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductSnapshotUpdateArgs = {
  data: ProductSnapshotUpdateInput;
  where: ProductSnapshotWhereUniqueInput;
};

export type ProductSnapshotUpdateInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSnapshotWhereInput = {
  AND?: InputMaybe<Array<ProductSnapshotWhereInput>>;
  NOT?: InputMaybe<Array<ProductSnapshotWhereInput>>;
  OR?: InputMaybe<Array<ProductSnapshotWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
};

export type ProductSnapshotWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  company?: InputMaybe<Scalars['String']['input']>;
  defaultVariantId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highestPrice?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ProductImageRelateToOneForUpdateInput>;
  lowestPrice?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<ProductVariantRelateToManyForUpdateInput>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  material?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  size?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type ProductVariantCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  material?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  size?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantManyRelationFilter = {
  every?: InputMaybe<ProductVariantWhereInput>;
  none?: InputMaybe<ProductVariantWhereInput>;
  some?: InputMaybe<ProductVariantWhereInput>;
};

export type ProductVariantOrderByInput = {
  color?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  material?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  size?: InputMaybe<OrderDirection>;
  variant?: InputMaybe<OrderDirection>;
};

export type ProductVariantRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductVariantCreateInput>>;
};

export type ProductVariantRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductVariantCreateInput>>;
  disconnect?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
};

export type ProductVariantRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductVariantWhereUniqueInput>;
  create?: InputMaybe<ProductVariantCreateInput>;
};

export type ProductVariantRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductVariantWhereUniqueInput>;
  create?: InputMaybe<ProductVariantCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVariantUpdateArgs = {
  data: ProductVariantUpdateInput;
  where: ProductVariantWhereUniqueInput;
};

export type ProductVariantUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  material?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  size?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantWhereInput = {
  AND?: InputMaybe<Array<ProductVariantWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  material?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductWhereInput>;
  size?: InputMaybe<StringFilter>;
  variant?: InputMaybe<StringFilter>;
};

export type ProductVariantWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  company?: InputMaybe<StringFilter>;
  defaultVariantId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  highestPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<ProductImageWhereInput>;
  lowestPrice?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  style?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  variants?: InputMaybe<ProductVariantManyRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  banner?: Maybe<Banner>;
  banners?: Maybe<Array<Banner>>;
  bannersCount?: Maybe<Scalars['Int']['output']>;
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<CartItem>>;
  cartItemsCount?: Maybe<Scalars['Int']['output']>;
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Category>;
  coupon?: Maybe<Coupon>;
  coupons?: Maybe<Array<Coupon>>;
  couponsCount?: Maybe<Scalars['Int']['output']>;
  /**  Get the distinct over all Products  */
  getAllProductDescriptors?: Maybe<ProductDescriptor>;
  /**  Get price range over a ProductVariant  */
  getPriceRange?: Maybe<MinMax>;
  keystone: KeystoneMeta;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<OrderItem>>;
  orderItemsCount?: Maybe<Scalars['Int']['output']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  productImage?: Maybe<ProductImage>;
  productImages?: Maybe<Array<ProductImage>>;
  productImagesCount?: Maybe<Scalars['Int']['output']>;
  productSnapshot?: Maybe<ProductSnapshot>;
  productSnapshots?: Maybe<Array<ProductSnapshot>>;
  productSnapshotsCount?: Maybe<Scalars['Int']['output']>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<Array<ProductVariant>>;
  productVariantsCount?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryBannerArgs = {
  where: BannerWhereUniqueInput;
};


export type QueryBannersArgs = {
  cursor?: InputMaybe<BannerWhereUniqueInput>;
  orderBy?: Array<BannerOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BannerWhereInput;
};


export type QueryBannersCountArgs = {
  where?: BannerWhereInput;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemsArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartItemWhereInput;
};


export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CategoryWhereInput;
};


export type QueryCategoriesCountArgs = {
  where?: CategoryWhereInput;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type QueryCouponsArgs = {
  cursor?: InputMaybe<CouponWhereUniqueInput>;
  orderBy?: Array<CouponOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CouponWhereInput;
};


export type QueryCouponsCountArgs = {
  where?: CouponWhereInput;
};


export type QueryGetAllProductDescriptorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGetPriceRangeArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderItemWhereInput;
};


export type QueryOrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};


export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};


export type QueryOrdersCountArgs = {
  where?: OrderWhereInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type QueryProductImagesArgs = {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  orderBy?: Array<ProductImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductImageWhereInput;
};


export type QueryProductImagesCountArgs = {
  where?: ProductImageWhereInput;
};


export type QueryProductSnapshotArgs = {
  where: ProductSnapshotWhereUniqueInput;
};


export type QueryProductSnapshotsArgs = {
  cursor?: InputMaybe<ProductSnapshotWhereUniqueInput>;
  orderBy?: Array<ProductSnapshotOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductSnapshotWhereInput;
};


export type QueryProductSnapshotsCountArgs = {
  where?: ProductSnapshotWhereInput;
};


export type QueryProductVariantArgs = {
  where: ProductVariantWhereUniqueInput;
};


export type QueryProductVariantsArgs = {
  cursor?: InputMaybe<ProductVariantWhereUniqueInput>;
  orderBy?: Array<ProductVariantOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductVariantWhereInput;
};


export type QueryProductVariantsCountArgs = {
  where?: ProductVariantWhereInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  cart?: Maybe<Array<CartItem>>;
  cartCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken?: Maybe<PasswordState>;
};


export type UserCartArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartItemWhereInput;
};


export type UserCartCountArgs = {
  where?: CartItemWhereInput;
};


export type UserOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};


export type UserOrdersCountArgs = {
  where?: OrderWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  cart?: InputMaybe<CartItemRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  cart?: InputMaybe<CartItemRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  cart?: InputMaybe<CartItemManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderManyRelationFilter>;
  password?: InputMaybe<PasswordFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ValidateCouponResult = {
  __typename?: 'ValidateCouponResult';
  amount: Scalars['Float']['output'];
  discountedAmount: Scalars['Float']['output'];
  isValid: Scalars['Boolean']['output'];
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  AuthenticatedItem: ( User );
  UserAuthenticationWithPasswordResult: ( UserAuthenticationWithPasswordFailure ) | ( UserAuthenticationWithPasswordSuccess );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticatedItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AuthenticatedItem']>;
  Banner: ResolverTypeWrapper<Banner>;
  BannerCreateInput: BannerCreateInput;
  BannerOrderByInput: BannerOrderByInput;
  BannerUpdateArgs: BannerUpdateArgs;
  BannerUpdateInput: BannerUpdateInput;
  BannerWhereInput: BannerWhereInput;
  BannerWhereUniqueInput: BannerWhereUniqueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilter: BooleanFilter;
  CalendarDay: ResolverTypeWrapper<Scalars['CalendarDay']['output']>;
  CalendarDayFilter: CalendarDayFilter;
  CartItem: ResolverTypeWrapper<CartItem>;
  CartItemCreateInput: CartItemCreateInput;
  CartItemManyRelationFilter: CartItemManyRelationFilter;
  CartItemOrderByInput: CartItemOrderByInput;
  CartItemRelateToManyForCreateInput: CartItemRelateToManyForCreateInput;
  CartItemRelateToManyForUpdateInput: CartItemRelateToManyForUpdateInput;
  CartItemUpdateArgs: CartItemUpdateArgs;
  CartItemUpdateInput: CartItemUpdateInput;
  CartItemWhereInput: CartItemWhereInput;
  CartItemWhereUniqueInput: CartItemWhereUniqueInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryOrderByInput: CategoryOrderByInput;
  CategoryRelateToOneForCreateInput: CategoryRelateToOneForCreateInput;
  CategoryRelateToOneForUpdateInput: CategoryRelateToOneForUpdateInput;
  CategoryUpdateArgs: CategoryUpdateArgs;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  CloudinaryImageFormat: CloudinaryImageFormat;
  CloudinaryImage_File: ResolverTypeWrapper<CloudinaryImage_File>;
  ConfirmPaymentAndCreateOrderResult: ResolverTypeWrapper<ConfirmPaymentAndCreateOrderResult>;
  Coupon: ResolverTypeWrapper<Coupon>;
  CouponCreateInput: CouponCreateInput;
  CouponOrderByInput: CouponOrderByInput;
  CouponUpdateArgs: CouponUpdateArgs;
  CouponUpdateInput: CouponUpdateInput;
  CouponWhereInput: CouponWhereInput;
  CouponWhereUniqueInput: CouponWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  CreatePaymentIntentResult: ResolverTypeWrapper<CreatePaymentIntentResult>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFilter: FloatFilter;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilter: IdFilter;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFilter: IntFilter;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  KeystoneAdminMeta: ResolverTypeWrapper<KeystoneAdminMeta>;
  KeystoneAdminUIFieldGroupMeta: ResolverTypeWrapper<KeystoneAdminUiFieldGroupMeta>;
  KeystoneAdminUIFieldMeta: ResolverTypeWrapper<KeystoneAdminUiFieldMeta>;
  KeystoneAdminUIFieldMetaCreateView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaCreateView>;
  KeystoneAdminUIFieldMetaCreateViewFieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
  KeystoneAdminUIFieldMetaIsNonNull: KeystoneAdminUiFieldMetaIsNonNull;
  KeystoneAdminUIFieldMetaItemView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaItemView>;
  KeystoneAdminUIFieldMetaItemViewFieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
  KeystoneAdminUIFieldMetaItemViewFieldPosition: KeystoneAdminUiFieldMetaItemViewFieldPosition;
  KeystoneAdminUIFieldMetaListView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaListView>;
  KeystoneAdminUIFieldMetaListViewFieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
  KeystoneAdminUIListMeta: ResolverTypeWrapper<KeystoneAdminUiListMeta>;
  KeystoneAdminUISort: ResolverTypeWrapper<KeystoneAdminUiSort>;
  KeystoneAdminUISortDirection: KeystoneAdminUiSortDirection;
  KeystoneMeta: ResolverTypeWrapper<KeystoneMeta>;
  MinMax: ResolverTypeWrapper<MinMax>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedStringFilter: NestedStringFilter;
  Order: ResolverTypeWrapper<Order>;
  OrderCreateInput: OrderCreateInput;
  OrderDirection: OrderDirection;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemManyRelationFilter: OrderItemManyRelationFilter;
  OrderItemOrderByInput: OrderItemOrderByInput;
  OrderItemRelateToManyForCreateInput: OrderItemRelateToManyForCreateInput;
  OrderItemRelateToManyForUpdateInput: OrderItemRelateToManyForUpdateInput;
  OrderItemUpdateArgs: OrderItemUpdateArgs;
  OrderItemUpdateInput: OrderItemUpdateInput;
  OrderItemWhereInput: OrderItemWhereInput;
  OrderItemWhereUniqueInput: OrderItemWhereUniqueInput;
  OrderManyRelationFilter: OrderManyRelationFilter;
  OrderOrderByInput: OrderOrderByInput;
  OrderRelateToManyForCreateInput: OrderRelateToManyForCreateInput;
  OrderRelateToManyForUpdateInput: OrderRelateToManyForUpdateInput;
  OrderRelateToOneForCreateInput: OrderRelateToOneForCreateInput;
  OrderRelateToOneForUpdateInput: OrderRelateToOneForUpdateInput;
  OrderUpdateArgs: OrderUpdateArgs;
  OrderUpdateInput: OrderUpdateInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PasswordFilter: PasswordFilter;
  PasswordResetRedemptionErrorCode: PasswordResetRedemptionErrorCode;
  PasswordState: ResolverTypeWrapper<PasswordState>;
  PaymentIntentStatus: PaymentIntentStatus;
  Product: ResolverTypeWrapper<Product>;
  ProductCreateInput: ProductCreateInput;
  ProductDescriptor: ResolverTypeWrapper<ProductDescriptor>;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductImageCreateInput: ProductImageCreateInput;
  ProductImageOrderByInput: ProductImageOrderByInput;
  ProductImageRelateToOneForCreateInput: ProductImageRelateToOneForCreateInput;
  ProductImageRelateToOneForUpdateInput: ProductImageRelateToOneForUpdateInput;
  ProductImageUpdateArgs: ProductImageUpdateArgs;
  ProductImageUpdateInput: ProductImageUpdateInput;
  ProductImageWhereInput: ProductImageWhereInput;
  ProductImageWhereUniqueInput: ProductImageWhereUniqueInput;
  ProductManyRelationFilter: ProductManyRelationFilter;
  ProductOrderByInput: ProductOrderByInput;
  ProductRelateToManyForCreateInput: ProductRelateToManyForCreateInput;
  ProductRelateToManyForUpdateInput: ProductRelateToManyForUpdateInput;
  ProductRelateToOneForCreateInput: ProductRelateToOneForCreateInput;
  ProductRelateToOneForUpdateInput: ProductRelateToOneForUpdateInput;
  ProductSnapshot: ResolverTypeWrapper<ProductSnapshot>;
  ProductSnapshotCreateInput: ProductSnapshotCreateInput;
  ProductSnapshotOrderByInput: ProductSnapshotOrderByInput;
  ProductSnapshotRelateToOneForCreateInput: ProductSnapshotRelateToOneForCreateInput;
  ProductSnapshotRelateToOneForUpdateInput: ProductSnapshotRelateToOneForUpdateInput;
  ProductSnapshotUpdateArgs: ProductSnapshotUpdateArgs;
  ProductSnapshotUpdateInput: ProductSnapshotUpdateInput;
  ProductSnapshotWhereInput: ProductSnapshotWhereInput;
  ProductSnapshotWhereUniqueInput: ProductSnapshotWhereUniqueInput;
  ProductUpdateArgs: ProductUpdateArgs;
  ProductUpdateInput: ProductUpdateInput;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  ProductVariantCreateInput: ProductVariantCreateInput;
  ProductVariantManyRelationFilter: ProductVariantManyRelationFilter;
  ProductVariantOrderByInput: ProductVariantOrderByInput;
  ProductVariantRelateToManyForCreateInput: ProductVariantRelateToManyForCreateInput;
  ProductVariantRelateToManyForUpdateInput: ProductVariantRelateToManyForUpdateInput;
  ProductVariantRelateToOneForCreateInput: ProductVariantRelateToOneForCreateInput;
  ProductVariantRelateToOneForUpdateInput: ProductVariantRelateToOneForUpdateInput;
  ProductVariantUpdateArgs: ProductVariantUpdateArgs;
  ProductVariantUpdateInput: ProductVariantUpdateInput;
  ProductVariantWhereInput: ProductVariantWhereInput;
  ProductVariantWhereUniqueInput: ProductVariantWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  RedeemUserPasswordResetTokenResult: ResolverTypeWrapper<RedeemUserPasswordResetTokenResult>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserAuthenticationWithPasswordFailure: ResolverTypeWrapper<UserAuthenticationWithPasswordFailure>;
  UserAuthenticationWithPasswordResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UserAuthenticationWithPasswordResult']>;
  UserAuthenticationWithPasswordSuccess: ResolverTypeWrapper<UserAuthenticationWithPasswordSuccess>;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToOneForCreateInput: UserRelateToOneForCreateInput;
  UserRelateToOneForUpdateInput: UserRelateToOneForUpdateInput;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ValidateCouponResult: ResolverTypeWrapper<ValidateCouponResult>;
  ValidateUserPasswordResetTokenResult: ResolverTypeWrapper<ValidateUserPasswordResetTokenResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticatedItem: ResolversUnionTypes<ResolversParentTypes>['AuthenticatedItem'];
  Banner: Banner;
  BannerCreateInput: BannerCreateInput;
  BannerOrderByInput: BannerOrderByInput;
  BannerUpdateArgs: BannerUpdateArgs;
  BannerUpdateInput: BannerUpdateInput;
  BannerWhereInput: BannerWhereInput;
  BannerWhereUniqueInput: BannerWhereUniqueInput;
  Boolean: Scalars['Boolean']['output'];
  BooleanFilter: BooleanFilter;
  CalendarDay: Scalars['CalendarDay']['output'];
  CalendarDayFilter: CalendarDayFilter;
  CartItem: CartItem;
  CartItemCreateInput: CartItemCreateInput;
  CartItemManyRelationFilter: CartItemManyRelationFilter;
  CartItemOrderByInput: CartItemOrderByInput;
  CartItemRelateToManyForCreateInput: CartItemRelateToManyForCreateInput;
  CartItemRelateToManyForUpdateInput: CartItemRelateToManyForUpdateInput;
  CartItemUpdateArgs: CartItemUpdateArgs;
  CartItemUpdateInput: CartItemUpdateInput;
  CartItemWhereInput: CartItemWhereInput;
  CartItemWhereUniqueInput: CartItemWhereUniqueInput;
  Category: Category;
  CategoryCreateInput: CategoryCreateInput;
  CategoryOrderByInput: CategoryOrderByInput;
  CategoryRelateToOneForCreateInput: CategoryRelateToOneForCreateInput;
  CategoryRelateToOneForUpdateInput: CategoryRelateToOneForUpdateInput;
  CategoryUpdateArgs: CategoryUpdateArgs;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  CloudinaryImageFormat: CloudinaryImageFormat;
  CloudinaryImage_File: CloudinaryImage_File;
  ConfirmPaymentAndCreateOrderResult: ConfirmPaymentAndCreateOrderResult;
  Coupon: Coupon;
  CouponCreateInput: CouponCreateInput;
  CouponOrderByInput: CouponOrderByInput;
  CouponUpdateArgs: CouponUpdateArgs;
  CouponUpdateInput: CouponUpdateInput;
  CouponWhereInput: CouponWhereInput;
  CouponWhereUniqueInput: CouponWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  CreatePaymentIntentResult: CreatePaymentIntentResult;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Float: Scalars['Float']['output'];
  FloatFilter: FloatFilter;
  ID: Scalars['ID']['output'];
  IDFilter: IdFilter;
  Int: Scalars['Int']['output'];
  IntFilter: IntFilter;
  JSON: Scalars['JSON']['output'];
  KeystoneAdminMeta: KeystoneAdminMeta;
  KeystoneAdminUIFieldGroupMeta: KeystoneAdminUiFieldGroupMeta;
  KeystoneAdminUIFieldMeta: KeystoneAdminUiFieldMeta;
  KeystoneAdminUIFieldMetaCreateView: KeystoneAdminUiFieldMetaCreateView;
  KeystoneAdminUIFieldMetaItemView: KeystoneAdminUiFieldMetaItemView;
  KeystoneAdminUIFieldMetaListView: KeystoneAdminUiFieldMetaListView;
  KeystoneAdminUIListMeta: KeystoneAdminUiListMeta;
  KeystoneAdminUISort: KeystoneAdminUiSort;
  KeystoneMeta: KeystoneMeta;
  MinMax: MinMax;
  Mutation: {};
  NestedStringFilter: NestedStringFilter;
  Order: Order;
  OrderCreateInput: OrderCreateInput;
  OrderItem: OrderItem;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemManyRelationFilter: OrderItemManyRelationFilter;
  OrderItemOrderByInput: OrderItemOrderByInput;
  OrderItemRelateToManyForCreateInput: OrderItemRelateToManyForCreateInput;
  OrderItemRelateToManyForUpdateInput: OrderItemRelateToManyForUpdateInput;
  OrderItemUpdateArgs: OrderItemUpdateArgs;
  OrderItemUpdateInput: OrderItemUpdateInput;
  OrderItemWhereInput: OrderItemWhereInput;
  OrderItemWhereUniqueInput: OrderItemWhereUniqueInput;
  OrderManyRelationFilter: OrderManyRelationFilter;
  OrderOrderByInput: OrderOrderByInput;
  OrderRelateToManyForCreateInput: OrderRelateToManyForCreateInput;
  OrderRelateToManyForUpdateInput: OrderRelateToManyForUpdateInput;
  OrderRelateToOneForCreateInput: OrderRelateToOneForCreateInput;
  OrderRelateToOneForUpdateInput: OrderRelateToOneForUpdateInput;
  OrderUpdateArgs: OrderUpdateArgs;
  OrderUpdateInput: OrderUpdateInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PasswordFilter: PasswordFilter;
  PasswordState: PasswordState;
  Product: Product;
  ProductCreateInput: ProductCreateInput;
  ProductDescriptor: ProductDescriptor;
  ProductImage: ProductImage;
  ProductImageCreateInput: ProductImageCreateInput;
  ProductImageOrderByInput: ProductImageOrderByInput;
  ProductImageRelateToOneForCreateInput: ProductImageRelateToOneForCreateInput;
  ProductImageRelateToOneForUpdateInput: ProductImageRelateToOneForUpdateInput;
  ProductImageUpdateArgs: ProductImageUpdateArgs;
  ProductImageUpdateInput: ProductImageUpdateInput;
  ProductImageWhereInput: ProductImageWhereInput;
  ProductImageWhereUniqueInput: ProductImageWhereUniqueInput;
  ProductManyRelationFilter: ProductManyRelationFilter;
  ProductOrderByInput: ProductOrderByInput;
  ProductRelateToManyForCreateInput: ProductRelateToManyForCreateInput;
  ProductRelateToManyForUpdateInput: ProductRelateToManyForUpdateInput;
  ProductRelateToOneForCreateInput: ProductRelateToOneForCreateInput;
  ProductRelateToOneForUpdateInput: ProductRelateToOneForUpdateInput;
  ProductSnapshot: ProductSnapshot;
  ProductSnapshotCreateInput: ProductSnapshotCreateInput;
  ProductSnapshotOrderByInput: ProductSnapshotOrderByInput;
  ProductSnapshotRelateToOneForCreateInput: ProductSnapshotRelateToOneForCreateInput;
  ProductSnapshotRelateToOneForUpdateInput: ProductSnapshotRelateToOneForUpdateInput;
  ProductSnapshotUpdateArgs: ProductSnapshotUpdateArgs;
  ProductSnapshotUpdateInput: ProductSnapshotUpdateInput;
  ProductSnapshotWhereInput: ProductSnapshotWhereInput;
  ProductSnapshotWhereUniqueInput: ProductSnapshotWhereUniqueInput;
  ProductUpdateArgs: ProductUpdateArgs;
  ProductUpdateInput: ProductUpdateInput;
  ProductVariant: ProductVariant;
  ProductVariantCreateInput: ProductVariantCreateInput;
  ProductVariantManyRelationFilter: ProductVariantManyRelationFilter;
  ProductVariantOrderByInput: ProductVariantOrderByInput;
  ProductVariantRelateToManyForCreateInput: ProductVariantRelateToManyForCreateInput;
  ProductVariantRelateToManyForUpdateInput: ProductVariantRelateToManyForUpdateInput;
  ProductVariantRelateToOneForCreateInput: ProductVariantRelateToOneForCreateInput;
  ProductVariantRelateToOneForUpdateInput: ProductVariantRelateToOneForUpdateInput;
  ProductVariantUpdateArgs: ProductVariantUpdateArgs;
  ProductVariantUpdateInput: ProductVariantUpdateInput;
  ProductVariantWhereInput: ProductVariantWhereInput;
  ProductVariantWhereUniqueInput: ProductVariantWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Query: {};
  RedeemUserPasswordResetTokenResult: RedeemUserPasswordResetTokenResult;
  String: Scalars['String']['output'];
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Upload: Scalars['Upload']['output'];
  User: User;
  UserAuthenticationWithPasswordFailure: UserAuthenticationWithPasswordFailure;
  UserAuthenticationWithPasswordResult: ResolversUnionTypes<ResolversParentTypes>['UserAuthenticationWithPasswordResult'];
  UserAuthenticationWithPasswordSuccess: UserAuthenticationWithPasswordSuccess;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToOneForCreateInput: UserRelateToOneForCreateInput;
  UserRelateToOneForUpdateInput: UserRelateToOneForUpdateInput;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ValidateCouponResult: ValidateCouponResult;
  ValidateUserPasswordResetTokenResult: ValidateUserPasswordResetTokenResult;
};

export type AuthenticatedItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatedItem'] = ResolversParentTypes['AuthenticatedItem']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export type BannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Banner'] = ResolversParentTypes['Banner']> = {
  head?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CloudinaryImage_File']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CalendarDayScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CalendarDay'], any> {
  name: 'CalendarDay';
}

export type CartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CloudinaryImage_File']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<CategoryProductsArgs, 'orderBy' | 'skip' | 'where'>>;
  productsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<CategoryProductsCountArgs, 'where'>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CloudinaryImage_FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['CloudinaryImage_File'] = ResolversParentTypes['CloudinaryImage_File']> = {
  encoding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicUrlTransformed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CloudinaryImage_FilePublicUrlTransformedArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmPaymentAndCreateOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfirmPaymentAndCreateOrderResult'] = ResolversParentTypes['ConfirmPaymentAndCreateOrderResult']> = {
  client_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PaymentIntentStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coupon'] = ResolversParentTypes['Coupon']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  minimumPurchaseAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  usageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  validFrom?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  validUntil?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePaymentIntentResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePaymentIntentResult'] = ResolversParentTypes['CreatePaymentIntentResult']> = {
  client_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PaymentIntentStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeystoneAdminMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminMeta'] = ResolversParentTypes['KeystoneAdminMeta']> = {
  list?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType, RequireFields<KeystoneAdminMetaListArgs, 'key'>>;
  lists?: Resolver<Array<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldGroupMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldGroupMeta'] = ResolversParentTypes['KeystoneAdminUIFieldGroupMeta']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['KeystoneAdminUIFieldMeta']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMeta'] = ResolversParentTypes['KeystoneAdminUIFieldMeta']> = {
  createView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaCreateView'], ParentType, ContextType>;
  customViewsIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldMeta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isFilterable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isNonNull?: Resolver<Maybe<Array<ResolversTypes['KeystoneAdminUIFieldMetaIsNonNull']>>, ParentType, ContextType>;
  isOrderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemView?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemView']>, ParentType, ContextType, Partial<KeystoneAdminUiFieldMetaItemViewArgs>>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListView'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['QueryMode']>, ParentType, ContextType>;
  viewsIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaCreateViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaItemViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaItemView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaItemView']> = {
  fieldMode?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldMode']>, ParentType, ContextType>;
  fieldPosition?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldPosition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaListViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaListView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaListView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiListMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIListMeta'] = ResolversParentTypes['KeystoneAdminUIListMeta']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['KeystoneAdminUIFieldMeta']>, ParentType, ContextType>;
  groups?: Resolver<Array<ResolversTypes['KeystoneAdminUIFieldGroupMeta']>, ParentType, ContextType>;
  hideCreate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initialColumns?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  initialSort?: Resolver<Maybe<ResolversTypes['KeystoneAdminUISort']>, ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSingleton?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plural?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  singular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiSortResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUISort'] = ResolversParentTypes['KeystoneAdminUISort']> = {
  direction?: Resolver<ResolversTypes['KeystoneAdminUISortDirection'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneMeta'] = ResolversParentTypes['KeystoneMeta']> = {
  adminMeta?: Resolver<ResolversTypes['KeystoneAdminMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['MinMax'] = ResolversParentTypes['MinMax']> = {
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addToCart?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<MutationAddToCartArgs, 'id'>>;
  authenticateUserWithPassword?: Resolver<Maybe<ResolversTypes['UserAuthenticationWithPasswordResult']>, ParentType, ContextType, RequireFields<MutationAuthenticateUserWithPasswordArgs, 'email' | 'password'>>;
  confirmPaymentAndCreateOrder?: Resolver<Maybe<ResolversTypes['ConfirmPaymentAndCreateOrderResult']>, ParentType, ContextType, RequireFields<MutationConfirmPaymentAndCreateOrderArgs, 'paymentIntentId'>>;
  createBanner?: Resolver<Maybe<ResolversTypes['Banner']>, ParentType, ContextType, RequireFields<MutationCreateBannerArgs, 'data'>>;
  createBanners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Banner']>>>, ParentType, ContextType, RequireFields<MutationCreateBannersArgs, 'data'>>;
  createCartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<MutationCreateCartItemArgs, 'data'>>;
  createCartItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItem']>>>, ParentType, ContextType, RequireFields<MutationCreateCartItemsArgs, 'data'>>;
  createCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<MutationCreateCategoriesArgs, 'data'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createCoupon?: Resolver<Maybe<ResolversTypes['Coupon']>, ParentType, ContextType, RequireFields<MutationCreateCouponArgs, 'data'>>;
  createCoupons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Coupon']>>>, ParentType, ContextType, RequireFields<MutationCreateCouponsArgs, 'data'>>;
  createInitialUser?: Resolver<ResolversTypes['UserAuthenticationWithPasswordSuccess'], ParentType, ContextType, RequireFields<MutationCreateInitialUserArgs, 'data'>>;
  createOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'data'>>;
  createOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationCreateOrderItemArgs, 'data'>>;
  createOrderItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>, ParentType, ContextType, RequireFields<MutationCreateOrderItemsArgs, 'data'>>;
  createOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<MutationCreateOrdersArgs, 'data'>>;
  createPaymentIntent?: Resolver<Maybe<ResolversTypes['CreatePaymentIntentResult']>, ParentType, ContextType, Partial<MutationCreatePaymentIntentArgs>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createProductImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType, RequireFields<MutationCreateProductImageArgs, 'data'>>;
  createProductImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>, ParentType, ContextType, RequireFields<MutationCreateProductImagesArgs, 'data'>>;
  createProductSnapshot?: Resolver<Maybe<ResolversTypes['ProductSnapshot']>, ParentType, ContextType, RequireFields<MutationCreateProductSnapshotArgs, 'data'>>;
  createProductSnapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductSnapshot']>>>, ParentType, ContextType, RequireFields<MutationCreateProductSnapshotsArgs, 'data'>>;
  createProductVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationCreateProductVariantArgs, 'data'>>;
  createProductVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType, RequireFields<MutationCreateProductVariantsArgs, 'data'>>;
  createProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<MutationCreateProductsArgs, 'data'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  createUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'data'>>;
  deleteBanner?: Resolver<Maybe<ResolversTypes['Banner']>, ParentType, ContextType, RequireFields<MutationDeleteBannerArgs, 'where'>>;
  deleteBanners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Banner']>>>, ParentType, ContextType, RequireFields<MutationDeleteBannersArgs, 'where'>>;
  deleteCartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<MutationDeleteCartItemArgs, 'where'>>;
  deleteCartItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItem']>>>, ParentType, ContextType, RequireFields<MutationDeleteCartItemsArgs, 'where'>>;
  deleteCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<MutationDeleteCategoriesArgs, 'where'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'where'>>;
  deleteCoupon?: Resolver<Maybe<ResolversTypes['Coupon']>, ParentType, ContextType, RequireFields<MutationDeleteCouponArgs, 'where'>>;
  deleteCoupons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Coupon']>>>, ParentType, ContextType, RequireFields<MutationDeleteCouponsArgs, 'where'>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'where'>>;
  deleteOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationDeleteOrderItemArgs, 'where'>>;
  deleteOrderItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>, ParentType, ContextType, RequireFields<MutationDeleteOrderItemsArgs, 'where'>>;
  deleteOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<MutationDeleteOrdersArgs, 'where'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
  deleteProductImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType, RequireFields<MutationDeleteProductImageArgs, 'where'>>;
  deleteProductImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>, ParentType, ContextType, RequireFields<MutationDeleteProductImagesArgs, 'where'>>;
  deleteProductSnapshot?: Resolver<Maybe<ResolversTypes['ProductSnapshot']>, ParentType, ContextType, RequireFields<MutationDeleteProductSnapshotArgs, 'where'>>;
  deleteProductSnapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductSnapshot']>>>, ParentType, ContextType, RequireFields<MutationDeleteProductSnapshotsArgs, 'where'>>;
  deleteProductVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationDeleteProductVariantArgs, 'where'>>;
  deleteProductVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType, RequireFields<MutationDeleteProductVariantsArgs, 'where'>>;
  deleteProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<MutationDeleteProductsArgs, 'where'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  deleteUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationDeleteUsersArgs, 'where'>>;
  endSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  redeemUserPasswordResetToken?: Resolver<Maybe<ResolversTypes['RedeemUserPasswordResetTokenResult']>, ParentType, ContextType, RequireFields<MutationRedeemUserPasswordResetTokenArgs, 'email' | 'password' | 'token'>>;
  sendUserPasswordResetLink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendUserPasswordResetLinkArgs, 'email'>>;
  updateBanner?: Resolver<Maybe<ResolversTypes['Banner']>, ParentType, ContextType, RequireFields<MutationUpdateBannerArgs, 'data' | 'where'>>;
  updateBanners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Banner']>>>, ParentType, ContextType, RequireFields<MutationUpdateBannersArgs, 'data'>>;
  updateCartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<MutationUpdateCartItemArgs, 'data' | 'where'>>;
  updateCartItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItem']>>>, ParentType, ContextType, RequireFields<MutationUpdateCartItemsArgs, 'data'>>;
  updateCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<MutationUpdateCategoriesArgs, 'data'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'where'>>;
  updateCoupon?: Resolver<Maybe<ResolversTypes['Coupon']>, ParentType, ContextType, RequireFields<MutationUpdateCouponArgs, 'data' | 'where'>>;
  updateCoupons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Coupon']>>>, ParentType, ContextType, RequireFields<MutationUpdateCouponsArgs, 'data'>>;
  updateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'data' | 'where'>>;
  updateOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationUpdateOrderItemArgs, 'data' | 'where'>>;
  updateOrderItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>, ParentType, ContextType, RequireFields<MutationUpdateOrderItemsArgs, 'data'>>;
  updateOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<MutationUpdateOrdersArgs, 'data'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'data' | 'where'>>;
  updateProductImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType, RequireFields<MutationUpdateProductImageArgs, 'data' | 'where'>>;
  updateProductImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>, ParentType, ContextType, RequireFields<MutationUpdateProductImagesArgs, 'data'>>;
  updateProductSnapshot?: Resolver<Maybe<ResolversTypes['ProductSnapshot']>, ParentType, ContextType, RequireFields<MutationUpdateProductSnapshotArgs, 'data' | 'where'>>;
  updateProductSnapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductSnapshot']>>>, ParentType, ContextType, RequireFields<MutationUpdateProductSnapshotsArgs, 'data'>>;
  updateProductVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationUpdateProductVariantArgs, 'data' | 'where'>>;
  updateProductVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType, RequireFields<MutationUpdateProductVariantsArgs, 'data'>>;
  updateProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<MutationUpdateProductsArgs, 'data'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
  updateUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, 'data'>>;
  validateCoupon?: Resolver<Maybe<ResolversTypes['ValidateCouponResult']>, ParentType, ContextType, RequireFields<MutationValidateCouponArgs, 'couponCode'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  charge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coupon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['CalendarDay']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['OrderItem']>>, ParentType, ContextType, RequireFields<OrderItemsArgs, 'orderBy' | 'skip' | 'where'>>;
  itemsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<OrderItemsCountArgs, 'where'>>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  snapshot?: Resolver<Maybe<ResolversTypes['ProductSnapshot']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordState'] = ResolversParentTypes['PasswordState']> = {
  isSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultVariantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  highestPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  lowestPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ProductShortDescriptionArgs, 'length'>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<ProductVariantArgs, 'skuId'>>;
  variants?: Resolver<Maybe<Array<ResolversTypes['ProductVariant']>>, ParentType, ContextType, RequireFields<ProductVariantsArgs, 'orderBy' | 'skip' | 'where'>>;
  variantsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<ProductVariantsCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDescriptor'] = ResolversParentTypes['ProductDescriptor']> = {
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  styles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CloudinaryImage_File']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSnapshot'] = ResolversParentTypes['ProductSnapshot']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authenticatedItem?: Resolver<Maybe<ResolversTypes['AuthenticatedItem']>, ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['Banner']>, ParentType, ContextType, RequireFields<QueryBannerArgs, 'where'>>;
  banners?: Resolver<Maybe<Array<ResolversTypes['Banner']>>, ParentType, ContextType, RequireFields<QueryBannersArgs, 'orderBy' | 'skip' | 'where'>>;
  bannersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryBannersCountArgs, 'where'>>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<QueryCartItemArgs, 'where'>>;
  cartItems?: Resolver<Maybe<Array<ResolversTypes['CartItem']>>, ParentType, ContextType, RequireFields<QueryCartItemsArgs, 'orderBy' | 'skip' | 'where'>>;
  cartItemsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryCartItemsCountArgs, 'where'>>;
  categories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'orderBy' | 'skip' | 'where'>>;
  categoriesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryCategoriesCountArgs, 'where'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'where'>>;
  coupon?: Resolver<Maybe<ResolversTypes['Coupon']>, ParentType, ContextType, RequireFields<QueryCouponArgs, 'where'>>;
  coupons?: Resolver<Maybe<Array<ResolversTypes['Coupon']>>, ParentType, ContextType, RequireFields<QueryCouponsArgs, 'orderBy' | 'skip' | 'where'>>;
  couponsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryCouponsCountArgs, 'where'>>;
  getAllProductDescriptors?: Resolver<Maybe<ResolversTypes['ProductDescriptor']>, ParentType, ContextType, Partial<QueryGetAllProductDescriptorsArgs>>;
  getPriceRange?: Resolver<Maybe<ResolversTypes['MinMax']>, ParentType, ContextType, Partial<QueryGetPriceRangeArgs>>;
  keystone?: Resolver<ResolversTypes['KeystoneMeta'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'where'>>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<QueryOrderItemArgs, 'where'>>;
  orderItems?: Resolver<Maybe<Array<ResolversTypes['OrderItem']>>, ParentType, ContextType, RequireFields<QueryOrderItemsArgs, 'orderBy' | 'skip' | 'where'>>;
  orderItemsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryOrderItemsCountArgs, 'where'>>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<QueryOrdersArgs, 'orderBy' | 'skip' | 'where'>>;
  ordersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryOrdersCountArgs, 'where'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'where'>>;
  productImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType, RequireFields<QueryProductImageArgs, 'where'>>;
  productImages?: Resolver<Maybe<Array<ResolversTypes['ProductImage']>>, ParentType, ContextType, RequireFields<QueryProductImagesArgs, 'orderBy' | 'skip' | 'where'>>;
  productImagesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryProductImagesCountArgs, 'where'>>;
  productSnapshot?: Resolver<Maybe<ResolversTypes['ProductSnapshot']>, ParentType, ContextType, RequireFields<QueryProductSnapshotArgs, 'where'>>;
  productSnapshots?: Resolver<Maybe<Array<ResolversTypes['ProductSnapshot']>>, ParentType, ContextType, RequireFields<QueryProductSnapshotsArgs, 'orderBy' | 'skip' | 'where'>>;
  productSnapshotsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryProductSnapshotsCountArgs, 'where'>>;
  productVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<QueryProductVariantArgs, 'where'>>;
  productVariants?: Resolver<Maybe<Array<ResolversTypes['ProductVariant']>>, ParentType, ContextType, RequireFields<QueryProductVariantsArgs, 'orderBy' | 'skip' | 'where'>>;
  productVariantsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryProductVariantsCountArgs, 'where'>>;
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'orderBy' | 'skip' | 'where'>>;
  productsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryProductsCountArgs, 'where'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'orderBy' | 'skip' | 'where'>>;
  usersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryUsersCountArgs, 'where'>>;
  validateUserPasswordResetToken?: Resolver<Maybe<ResolversTypes['ValidateUserPasswordResetTokenResult']>, ParentType, ContextType, RequireFields<QueryValidateUserPasswordResetTokenArgs, 'email' | 'token'>>;
};

export type RedeemUserPasswordResetTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemUserPasswordResetTokenResult'] = ResolversParentTypes['RedeemUserPasswordResetTokenResult']> = {
  code?: Resolver<ResolversTypes['PasswordResetRedemptionErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  cart?: Resolver<Maybe<Array<ResolversTypes['CartItem']>>, ParentType, ContextType, RequireFields<UserCartArgs, 'orderBy' | 'skip' | 'where'>>;
  cartCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<UserCartCountArgs, 'where'>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<UserOrdersArgs, 'orderBy' | 'skip' | 'where'>>;
  ordersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<UserOrdersCountArgs, 'where'>>;
  password?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  passwordResetIssuedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  passwordResetRedeemedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  passwordResetToken?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordFailureResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordFailure'] = ResolversParentTypes['UserAuthenticationWithPasswordFailure']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordResult'] = ResolversParentTypes['UserAuthenticationWithPasswordResult']> = {
  __resolveType: TypeResolveFn<'UserAuthenticationWithPasswordFailure' | 'UserAuthenticationWithPasswordSuccess', ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordSuccess'] = ResolversParentTypes['UserAuthenticationWithPasswordSuccess']> = {
  item?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateCouponResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateCouponResult'] = ResolversParentTypes['ValidateCouponResult']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  discountedAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateUserPasswordResetTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateUserPasswordResetTokenResult'] = ResolversParentTypes['ValidateUserPasswordResetTokenResult']> = {
  code?: Resolver<ResolversTypes['PasswordResetRedemptionErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticatedItem?: AuthenticatedItemResolvers<ContextType>;
  Banner?: BannerResolvers<ContextType>;
  CalendarDay?: GraphQLScalarType;
  CartItem?: CartItemResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CloudinaryImage_File?: CloudinaryImage_FileResolvers<ContextType>;
  ConfirmPaymentAndCreateOrderResult?: ConfirmPaymentAndCreateOrderResultResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  CreatePaymentIntentResult?: CreatePaymentIntentResultResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  KeystoneAdminMeta?: KeystoneAdminMetaResolvers<ContextType>;
  KeystoneAdminUIFieldGroupMeta?: KeystoneAdminUiFieldGroupMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMeta?: KeystoneAdminUiFieldMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMetaCreateView?: KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaItemView?: KeystoneAdminUiFieldMetaItemViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaListView?: KeystoneAdminUiFieldMetaListViewResolvers<ContextType>;
  KeystoneAdminUIListMeta?: KeystoneAdminUiListMetaResolvers<ContextType>;
  KeystoneAdminUISort?: KeystoneAdminUiSortResolvers<ContextType>;
  KeystoneMeta?: KeystoneMetaResolvers<ContextType>;
  MinMax?: MinMaxResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  PasswordState?: PasswordStateResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDescriptor?: ProductDescriptorResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductSnapshot?: ProductSnapshotResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RedeemUserPasswordResetTokenResult?: RedeemUserPasswordResetTokenResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAuthenticationWithPasswordFailure?: UserAuthenticationWithPasswordFailureResolvers<ContextType>;
  UserAuthenticationWithPasswordResult?: UserAuthenticationWithPasswordResultResolvers<ContextType>;
  UserAuthenticationWithPasswordSuccess?: UserAuthenticationWithPasswordSuccessResolvers<ContextType>;
  ValidateCouponResult?: ValidateCouponResultResolvers<ContextType>;
  ValidateUserPasswordResetTokenResult?: ValidateUserPasswordResetTokenResultResolvers<ContextType>;
};

