import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { useStyles } from "../Styles/StyleHome"

// const getData = graphql`
// query heroQuery {
//     strapiHero {
//         hero_image {
//           childImageSharp {
//             fluid {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//           }
//         }
//       }
//   }
// `

const Home = () => {
    const classes = useStyles()
    // const imageData = useStaticQuery(getData)


    return (
        <div className={classes.root}>
            {/* <BackgroundImage
                id="home"
                Tag="section"
                fluid={imageData.strapiHero.hero_image.childImageSharp.fluid}
                className={classes.background}
            >
                <div className={classes.wrapper_hero}>
                    <h1 className={classes.hero_title}>Eat Healthy, Get Well</h1>
                </div>
            </BackgroundImage> */}
        </div>
    )
}

export default Home
