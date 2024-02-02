import React from 'react'

interface ComponentMapperProps<T> {
  components: { [key: string]: React.FC }
  componentName: string
  componentProps: T
}

const ComponentMapper = <T extends object>({
  components,
  componentName,
  componentProps
}: ComponentMapperProps<T>) => {
  const ComponentToRender = components[componentName]

  if (ComponentToRender) {
    return <ComponentToRender {...componentProps} />
  } else {
    console.error(`Component '${componentName}' not found.`)
    return null
  }
}

export default ComponentMapper
