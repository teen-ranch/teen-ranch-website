import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import { HTMLContent } from '../components/Content'
import HeroBanner from '../components/HeroBanner';

const Program = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
		<HeroBanner title={ post.frontmatter.title } subTitle={ post.frontmatter.subTitle } />
		{
			post.frontmatter.categories.map((category, i) => {
				return (
					<div className='programCategory' key={i}>
						{ category.title }
					</div>
				)
			})
		}
    </Layout>
  )
}

Program.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Program

export const pageQuery = graphql`
  query ProgramById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
		subTitle
        description
        tags
		categories {
			title
			description
			image
		}
      }
    }
  }
`
