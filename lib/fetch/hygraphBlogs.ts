import * as zh from 'graphql-request'
import { GRAPH_CMS_CLIENT } from '../api/graphqlAPl'

interface IMultipleBlogs {
    id: string
    title: string
    description: string
    slug: string
    image: string;
    createdAt: string
}

type DMultipleBlog<T> = {
    
        blogBs: Array<T>
  
}

/**
 * Returns Multiple blogs from cms
 * @returns
 */
export function returnMultipleBlogs(): Promise<DMultipleBlog<IMultipleBlogs>> {
    const vquery = zh.gql`
{
  blogBs {
    id
    title
    description
    slug
    image 
    createdAt
  }
}

    `

    return GRAPH_CMS_CLIENT.request(vquery)
}

export interface ISingleBlog {
    description: string | null | undefined
    id: string
    title: string
    slug: string
    content: {
      raw:any
    }
    image: string;
    blogComments: Array<{
        id:string;
        userName: string
        userComment: string
    }>
    createdAt: string
}
type DSingleBlog = {
   
        blogB: ISingleBlog
  
}
/**
 * Returns a Single blog from cms
 * @returns
 */
export function returnSingleBlog(slugURl: string): Promise<DSingleBlog> {
    const vquery = zh.gql`
  {
    blogB(where: { slug: "${slugURl}" }) {
      id
      title

      content {
        raw
      }
      image 
      blogComments {
        id
        userName
        userComment
      }
      slug
      createdAt
    }
  }

    `

    return GRAPH_CMS_CLIENT.request(vquery)
}

interface INumberedBlog {
    id: string
    title: string
    description: string
    slug: string
    image: string;
    createdAt: string
}

/**
 * Returns Numbered blogs
 * @returns
 */
export function returnNumberedBlogs(blogNumber: number): Promise<DMultipleBlog<INumberedBlog>> {
    const vquery = zh.gql`
{
  blogBs(first: 3) {
    id
    title
    description
    slug
    image 
    createdAt
  }
}
    `

    return GRAPH_CMS_CLIENT.request(vquery)
}
