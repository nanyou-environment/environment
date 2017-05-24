const NewsList = r => require.ensure([], () => r(require('components/NewsList')), 'newslist')
const TopicList = r => require.ensure([], () => r(require('components/TopicList')), 'topiclist')
const NewsContent = r => require.ensure([], () => r(require('components/NewsContent')), 'newscontent')
const SectionList = r => require.ensure([], () => r(require('components/SectionList')), 'sectionlist')

export default {
  routes: [
    {path: '/', component: NewsList},
    {path: '/news/:id', component: NewsContent},
    {path: '/topic/:id', component: TopicList},
    {path: '/section/:id', component: SectionList}
  ]
}
