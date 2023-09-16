type Menu = {
  id: number
  name: string
  link: string
  bg?: string
}

export const menus: Array<Menu> = [
  {
    id: 1,
    name: 'Transitions',
    link: '/transitions'
  },
  {
    id: 2,
    name: 'Success Check ✅',
    link: '/success-check',
    bg: 'bg-blue-500 hover:bg-blue-600'
  }
]

export default menus
