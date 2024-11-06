import React, { Suspense } from 'react'

const ProfileComponent = React.lazy(() => import('../profile/Profile'))

const LazyPage = () => {
  return (
    <div>
        <h4>LazyLoadedComponent</h4>
        <Suspense fallback={<div>Loading Profile Module</div>}>
            <ProfileComponent/>
        </Suspense>
    </div>
  )
}

export default LazyPage