import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import { HTMLContent } from '../components/Content'
import HeroBanner from '../components/HeroBanner';
import './program.less'
// import { Img } from '@tueri/react'

const Program = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
		<HeroBanner title={ post.frontmatter.title } subTitle={ post.frontmatter.subTitle } />
    <div className='programCategory__container'>
      {
        post.frontmatter.categories.map((category, i) => {
          return (
            <div className='programCategory' key={i}>

              { 
                process.env.NODE_ENV === 'production' ? (
                  // <Img className='programCategory__image' src={`https://cdn.tueri.io/68719476739/netlify/${ category.image.replace("/img", "" )} `} alt={ category.title } />
                  <img className='programCategory__image' src={ category.image } alt={ category.title } />
                ) : (
                  <img className='programCategory__image' src={ category.image } alt={ category.title } />
                ) 
              }
              

              <div className='programCategory__overlay'>
                <div className='programCategory__text'>
                  <h2 className='programCategory__title'>{ category.title }</h2>
                  <h3 className='programCategory__description'>{ category.description }</h3>
                </div>
              </div>              
            </div>
          )
        })
      }
    </div>
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
        title
		    subTitle
        description
		    categories {
			    title
			    description
			    image
		    }
      }
    }
  }
`
