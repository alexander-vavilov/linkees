import { Link } from '.'

export interface LinksContextValue {
  links: Link[]
  addNew: () => void
  remove: (id: string) => void
}
