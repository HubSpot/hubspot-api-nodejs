import { initObject } from '../../../services/initObject'
import BaseDiscovery from '../../BaseDiscovery'

export default class BlogsDiscovery extends BaseDiscovery {
  public _authors: any
  public _blogPosts: any
  public _tags: any

  /**
   * Getter
   * @returns AuthorsDiscovery
   */
  get authors() {
    if (!this._authors) {
      this._authors = initObject('cms/blogs/authors/AuthorsDiscovery', this.config)
    }

    return this._authors
  }

  /**
   * Getter
   * @returns BlogPostsDiscovery
   */
  get blogPosts() {
    if (!this._blogPosts) {
      this._blogPosts = initObject('cms/blogs/blog_posts/BlogPostsDiscovery', this.config)
    }

    return this._blogPosts
  }

  /**
   * Getter
   * @returns TagsDiscovery
   */
  get tags() {
    if (!this._tags) {
      this._tags = initObject('cms/blogs/tags/TagsDiscovery', this.config)
    }

    return this._tags
  }
}
