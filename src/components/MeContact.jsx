import { Link } from 'react-router-dom'
import CvDownloader from './CvDownloader'

export default function MeContact() {
  return (
    <><Link to="/contact" className="btn btn-primary">
      Contact Me <i className="bi bi-send"></i>
    </Link> <CvDownloader/>
    </>
  )
}
