import React, { useContext, createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const StarRateContext = createContext()
function useStarRateContext() {
  const context = useContext(StarRateContext)
  if (!context) {
    throw new Error(
      'Star components cannot be rendered outside the StarRate component'
    )
  }
  return context
}

const StarRate = ({ children, value = 0, count = 5, onChange, ...props }) => {
  const [currentValue, setCurrentValue] = useState(Math.ceil(value))
  const providerValue = useMemo(
    () => ({ currentValue, setCurrentValue, onChange }),
    [currentValue]
  )
  return (
    <StarRateContext.Provider value={providerValue}>
      <div
        {...props}
        onMouseLeave={() => setCurrentValue(value)}
        style={{ display: 'flex' }}
      >
        {(children || []).length > 0
          ? children
              .filter(({ type }) => type === Icon)
              .map((c, i) => React.cloneElement(c, { value: i + 1 }))
          : String('0')
              .repeat(count)
              .split('')
              .map((_, i) => <Icon key={`start_${i + 1}`} value={i + 1} />)}
      </div>
    </StarRateContext.Provider>
  )
}

StarRate.propTypes = {
  value: PropTypes.number,
  count: PropTypes.number,
  onChange: PropTypes.func
}

const Icon = ({ value, children, ...props }) => {
  const { currentValue, setCurrentValue, onChange } = useStarRateContext()
  const getIcon = (active) => {
    return children.find(
      ({ type }) => type === (active ? IconActive : IconDefault)
    )
  }
  return (
    <div
      {...props}
      onMouseEnter={() => setCurrentValue(value)}
      onClick={(_) => (onChange ? onChange(value) : null)}
    >
      {(children || []).length > 1 ? (
        getIcon(currentValue >= value)
      ) : currentValue >= value ? (
        <IconDefault />
      ) : (
        <IconActive />
      )}
    </div>
  )
}

Icon.propTypes = {
  value: PropTypes.number
}

const IconActive = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children || (
        <svg height='25' width='25'>
          <polygon
            points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
            fill='#d8d8d8'
          />
        </svg>
      )}
    </div>
  )
}
const IconDefault = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children || (
        <svg height='25' width='25'>
          <polygon
            points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
            fill='#ffd055'
          />
        </svg>
      )}
    </div>
  )
}

StarRate.Icon = Icon
StarRate.Icon.Active = IconActive
StarRate.Icon.Default = IconDefault
export { StarRate }
