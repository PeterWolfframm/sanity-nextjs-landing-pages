export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f944a730e058d12968b4b68',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y3vdnbzq',
                  apiId: 'e77a19e8-8f7a-480a-abee-707b266a3674'
                },
                {
                  buildHookId: '5f944a73b259c8fe43057ccd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4idugnyh',
                  apiId: 'e2c73e3d-f54a-4c74-b3ec-8521f773a8cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterWolfframm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4idugnyh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
