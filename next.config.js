module.exports = {
    env: {
        NEXT_PUBLIC_GOOGLE_ANALYTICS='GTM-N3Z38Q2'
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config
    },
    images: {
        domains: ['bizweb.dktcdn.net','sc04.alicdn.com'],
    },
    poweredByHeader: false,
    generateEtags: false,
    // images: {
    // },
};