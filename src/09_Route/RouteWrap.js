import SubWrapper from '../UI/SubWrapper';
import RouteMain from './RouteMain';

export default function RouteWrap() {
  return (
    <div>
      <SubWrapper mainWrap={<RouteMain />} mainAlign='start' />
    </div>
  )
}
