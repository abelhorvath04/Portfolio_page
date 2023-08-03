import React from 'react'
import {Button} from 'react-bootstrap'

export default function CvDownloader() {

    const handleDownload = () => {
        window.location.href = './download_cv/download.php';
      };

  return (
    <Button variant="primary" onClick={handleDownload}>Bio <i class="bi bi-cloud-download"></i></Button>
  )
}
