# rc-rating

> Customizable star ratings component for React.

## Install

```bash
npm install --save rc-rating
```

## Usage

```jsx
import React, { Component } from 'react'

import StarRate from 'rc-rating'

class Example extends Component {
  onChange = (rate) => {
      console.log(rate)
  }
  render() {
    return <StarRate value={3} count={5} onChange={this.onChange} />
  }
}
```

## Customising icons
```jsx
import React, { Component } from 'react'

import StarRate from 'rc-rating'

class Example extends Component {
  onChange = (rate) => {
      console.log(rate)
  }
  render() {
    return (
      <StarRate value={1} onChange={this.onChange}>
        <StarRate.Icon>
          <StarRate.Icon.Default>
            Default icon
          </StarRate.Icon.Default>
          <StarRate.Icon.Active>
            Icon active
          </StarRate.Icon.Active>
        </StarRate.Icon>
        <StarRate.Icon>
          <StarRate.Icon.Default>
            Default icon
          </StarRate.Icon.Default>
          <StarRate.Icon.Active>
            Icon active
          </StarRate.Icon.Active>
        </StarRate.Icon>
        <StarRate.Icon>
          <StarRate.Icon.Default>
            Default icon
          </StarRate.Icon.Default>
          <StarRate.Icon.Active>
            Icon active
          </StarRate.Icon.Active>
        </StarRate.Icon>
      </StarRate>
    )
  }
}
```

### API
This a list of props that you can pass down to the component:

| Property               | Description                                                                                                                               | Default value | type     |
| ---------------------- | ------------------------------------------------------- | ------------- | -------- |
| `value`                | Set rating value                                        | `null`        | number   |
| `count`                | How many stars you want                                 | 5             | number   |
| `onChange(rate)`       | Will be invoked any time the rating is changed          | `null`        | function |

## License

MIT © [bobadj](https://github.com/)
