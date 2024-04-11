import './_grid.scss'
import classNames from 'classnames'

export function Grid({ children, className }) {
  return (
    <div className={classNames('grid', className)}>
      {children}
    </div>
  )
}

export function Item({ children, className }) {
  return (
    <div className={classNames('grid-item', className)}>
      {children}
    </div>
  )
}