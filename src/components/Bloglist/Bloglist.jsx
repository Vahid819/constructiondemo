import React from 'react'
import Companystatistics from '../CompanyStatistics/Companystatistics'
import ExpertTeam from '../CompanyStatistics/ExpertTeam'
import Happyclients from '../CompanyStatistics/Happyclients'
import Projectscompleted from '../CompanyStatistics/Projectscompleted'
import Yearsexperience from '../CompanyStatistics/Yearsexperience'
import Counting from './Counting'
import Blogs from './Blogs'

function Bloglist() {
  return (
    <div>
        <Counting />
        <Blogs />
    </div>
  )
}

export default Bloglist