import { AdminContainer } from "../../styles/admin";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Admin = ({user}) => {
  const navigate = useNavigate();

  return <AdminContainer>
    <aside>
      <div>
        <a href="/admin/overview"><span>Overview</span></a>
      </div>
      <div>
        <a href=""><span>Novo Produto</span></a>
      </div>
      <div>
        <a href=""><span>Comunicar</span></a>
      </div>
      <div>
        <a href=""><span>Mensagens</span></a>
      </div>
      <div>
        <a href=""><span>Gerenciar</span></a>
      </div>
    </aside>
    <article>

    </article>
  </AdminContainer>;
}
 
export default Admin;