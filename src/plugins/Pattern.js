import React from 'react'

export const PatternPlugin = () => ({
  renderNode (nodeProps) {
    const {
      attributes, node, children, parent,
    } = nodeProps

    if (node.type === 'examples_block') {
      return <div className="pattern__examples--block" {...attributes}>{children}</div>
    } else if (node.type === 'center_block') {
      return <div className="pattern__center--block" {...attributes}>{children}</div>
    } else if (node.type === 'heading-one') {
      if (parent.type === 'examples_block') {
        return <div className="pattern__examples--header" {...attributes}>{children}</div>
      }
      return <h1 {...attributes}>{children}</h1>
    } else if (node.type === 'heading-two') {
      if (parent.type === 'examples_block') {
        return <div className="pattern__examples--subheader" {...attributes}>{children}</div>
      }
      return <h2 {...attributes}>{children}</h2>
    }
    return null
  },
})
