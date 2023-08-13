import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mb-4 flex flex-col text-sm items-center text-gray-500 dark:text-gray-400">
        {`${siteMetadata.author} • Have a great day!`}
      </div>
    </footer>
  )
}
