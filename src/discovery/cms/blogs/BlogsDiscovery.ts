import BaseDiscovery from '../../BaseDiscovery'
import type AuthorsDiscovery from './authors/AuthorsDiscovery'
import type BlogPostsDiscovery from './blog_posts/BlogPostsDiscovery'
import type TagsDiscovery from './tags/TagsDiscovery'

export default class BlogsDiscovery extends BaseDiscovery {
  public _authors: AuthorsDiscovery | undefined
  public _blogPosts: BlogPostsDiscovery | undefined
  public _tags: TagsDiscovery | undefined

  /**
   * Getter
   * @returns AuthorsDiscovery
   */
  get authors() {
    if (!this._authors) {
      const requiredClass = require('./authors/AuthorsDiscovery')
      this._authors = new requiredClass.default(this.config) as AuthorsDiscovery
    }

    return this._authors
  }

  /**
   * Getter
   * @returns BlogPostsDiscovery
   */
  get blogPosts() {
    if (!this._blogPosts) {
      const requiredClass = require('./blog_posts/BlogPostsDiscovery')
      this._blogPosts = new requiredClass.default(this.config) as BlogPostsDiscovery
    }

    return this._blogPosts
  }

  /**
   * Getter
   * @returns TagsDiscovery
   */
  get tags() {
    if (!this._tags) {
      const requiredClass = require('./tags/TagsDiscovery')
      this._tags = new requiredClass.default(this.config) as TagsDiscovery
    }

    return this._tags
  }
}
