export default {
  formId: 'productCreateForm',
  formField: {
    product: {
      key: 'product',
      name: 'product',
      label: 'Product',
      requiredErrorMsg: 'Product is required',
    },
    sku: {
      key: 'sku',
      name: 'sku',
      label: 'SKU',
      requiredErrorMsg: 'SKU is required',
    },
    variantName: {
      key: 'variantName',
      name: 'variantName',
      label: 'Product Variant Name',
      requiredErrorMsg: 'Product Variant Name is required',
    },
    variantImage: {
      key: 'variantImage',
      name: 'variantImage',
      label: 'Thumbnail',
    },
    variantStatus: {
      key: 'variantStatus',
      name: 'variantStatus',
      label: 'Product Variant Status',
      requiredErrorMsg: 'Product Variant Status is required',
    },
    variantDescription: {
      key: 'variantDescription',
      name: 'variantDescription',
      label: 'Product Variant Description',
      requiredErrorMsg: 'Product Variant Description is required',
    },
    variantTags: {
      key: 'variantTags',
      name: 'variantTags',
      label: 'Tags',
    },
    quantity: {
      key: 'quantity',
      name: 'quantity',
      label: 'Initial Quantity',
      requiredErrorMsg: 'Initial Quantity is required',
      invalidErrorMsg: 'Invalid Initial Quantity format',
    },
    price: {
      price: {
        key: 'price',
        name: 'price.price',
        label: 'Price',
        requiredErrorMsg: 'Price is required',
        invalidErrorMsg: 'Invalid Price format',
      },
      discount: {
        key: 'discount',
        name: 'price.discount',
        label: 'Discount',
        requiredErrorMsg: 'Discount is required',
        invalidErrorMsg: 'Invalid Discount format',
      },
    },
    media: {
      key: 'media',
      name: 'media',
      label: 'Media',
    },
    meta: {
      metaTagTitle: {
        key: 'metaTagTitle',
        name: 'meta.metaTagTitle',
        label: 'Meta Tag Title',
        requiredErrorMsg: 'Meta Tag Title is required',
      },
      metaTagDescription: {
        key: 'metaTagDescription',
        name: 'meta.metaTagDescription',
        label: 'Meta Tag Description',
        requiredErrorMsg: 'Meta Tag Description is required',
      },
      pageSlug: {
        key: 'pageSlug',
        name: 'meta.pageSlug',
        label: 'Page Slug',
        requiredErrorMsg: 'Page Slug is required',
      },
    },
    pointValues: [
      {
        membershipLevel: {
          key: 'membershipLevel',
          name: 'membershipLevel',
          requiredErrorMsg: 'Membership Level is required',
        },
        pointValue: {
          key: 'pointValue',
          name: 'pointValue',
          label: 'Point Value',
          requiredErrorMsg: 'Point Value is required',
          invalidErrorMsg: 'Invalid Point Value format',
        },
      },
    ],
  },
}