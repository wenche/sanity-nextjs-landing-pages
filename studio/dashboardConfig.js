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
                  buildHookId: '5f4f51d6a20a7e71afaa6f7e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i3ri5gnm',
                  apiId: 'bdb7a4cd-a854-4a3d-bc14-4ff763ca466b'
                },
                {
                  buildHookId: '5f4f51d9fccae2735c21e79b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4445g5ff',
                  apiId: 'abe409f0-75d3-4809-a832-f62ca806dce2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wenche/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4445g5ff.netlify.app', category: 'apps'}
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
