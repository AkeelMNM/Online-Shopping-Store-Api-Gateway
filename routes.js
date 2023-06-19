import * as dotenv from 'dotenv';
dotenv.config();

const productApiProxyTarget = process.env.FASHION_STORE_API_ADDRESS;
const userApiProxyTarget = process.env.FASHION_STORE_USER_API_ADDRESS;

const ROUTES = [
    {
        url: '/product',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: `${productApiProxyTarget}/product`,
            changeOrigin: true,
            pathRewrite: {
                [`^/product`]: '',
            },
        }
    },
    {
        url: '/cart',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: `${productApiProxyTarget}/cart`,
            changeOrigin: true,
            pathRewrite: {
                [`^/cart`]: '',
            },
        }
    },
    {
        url: '/content',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: `${productApiProxyTarget}/content`,
            changeOrigin: true,
            pathRewrite: {
                [`^/content`]: '',
            },
        }
    },
    {
        url: '/payment',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: `${productApiProxyTarget}/payment`,
            changeOrigin: true,
            pathRewrite: {
                [`^/payment`]: '',
            },
        }
    },
    {
        url: '/public',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: `${productApiProxyTarget}/public`,
            changeOrigin: true,
            pathRewrite: {
                [`^/public`]: '',
            },
        }
    },
    {
        url: '/user',
        auth: false,
        creditCheck: false,
        proxy: {
            target: `${userApiProxyTarget}/user`,
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '',
            },
        }
    }
]

export default ROUTES;
