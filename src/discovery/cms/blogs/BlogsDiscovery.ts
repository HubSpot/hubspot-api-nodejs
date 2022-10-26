import { BaseDiscovery } from '../../BaseDiscovery'
import { initObject } from '../../../services/initObject'

export class BlogsDiscovery extends BaseDiscovery {
  public _authors: any
  public _blogPosts: any
  public _tags: any

  /**
  * Getter
  * @returns TimelineDiscovery
  */
  get authors() {
    if(!this._authors) {
      this._authors = initObject('cms/blogs/authors/AuthorsDiscovery', this.config)
    }

    return this._authors
  }
  
  /**
  * Getter
  * @returns BlogPostsDiscovery
  */
  get blogPosts() {
    if(!this._blogPosts) {
      this._blogPosts = initObject('cms/blogs/blog_posts/BlogPostsDiscovery', this.config)
    }

    return this._blogPosts
  }

  /**
  * Getter
  * @returns TagsDiscovery
  */
  get tags() {
    if(!this._tags) {
      this._tags = initObject('cms/blogs/tags/TagsDiscovery', this.config)
    }

    return this._tags
  }
}
