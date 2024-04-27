interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Polyglot Translate',
    description: `A website capable of translating text into multiple languages simultaneously.`,
    imgSrc: '/static/images/project/polyglot-translate.webp',
    href: 'https://pt.nightfae.com/en',
  },
]

export default projectsData
