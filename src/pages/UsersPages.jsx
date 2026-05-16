import React from 'react'
import { Outlet } from 'react-router-dom';
export default function UsersPages() {
  return <section className="py-4" >

    <Outlet />

  </section>
}
