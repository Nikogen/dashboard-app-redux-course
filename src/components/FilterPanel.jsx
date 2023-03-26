import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeAllFilters, removeFilter } from 'store/filters/filters-actions'
import { selectAllFilters } from 'store/filters/filters-selectors'
// import { selectAllFilters } from 'store/filters/filters-selectors'

const FilterPanel = () => {
  const filters = useSelector(selectAllFilters)
  const dispatch = useDispatch()

  if (filters.length === 0) return null

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(removeAllFilters())}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }
