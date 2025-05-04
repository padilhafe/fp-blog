interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GPON',
    description: `Série gratuita que ensina desde a instalação até monitoramentos avançados via SNMP e scripts personalizados.`,
    imgSrc: '/static/images/gpon.png',
    href: 'https://felipepadilha.com.br/series/gpon',
  },
  {
    title: 'Zabbix',
    description: `Série gratuita que ensina desde a instalação até monitoramentos avançados via SNMP e scripts personalizados.`,
    imgSrc: '/static/images/zabbix.png',
    href: 'https://felipepadilha.com.br/series/zabbix',
  }
]

export default projectsData
