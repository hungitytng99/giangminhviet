module.exports = {
    env: {
        NEXT_PUBLIC_BASE_API: "http://api.likestoday.vn"
    },
    async rewrites() {
        return [
            {
                source: '/home',
                destination: '/home-page',
            },
        ]
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config
    },
    poweredByHeader: false,
    generateEtags: false, 
};