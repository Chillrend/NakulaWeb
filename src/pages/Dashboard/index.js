import React from 'react';
import UserCards from './dashboard_info';
import Table from './table';
import QuickLinks from './quick_links';


const propr = {
    title: 'Koin Peminjaman',
    description:'Pantau sisa koin untuk peminjaman',
    icon: 'fas fa-dollar-sign',
    bg_col: '#fff',
    message_text: 'Sisa Koin',
    value: '10',
    type: ' Koin',
    lastupdated: '3 Hari Yang Lalu'
};

const proprforkompen = {
    title: 'Kompensasi',
    description:'Pantau sisa koin untuk peminjaman',
    icon: 'fas fa-calendar',
    bg_col: '#fff',
    message_text: 'Jumlah Kompensasi',
    value: '25',
    type: 'x',
    lastupdated: '3 Hari Yang Lalu'
};
const title = "Alat yang belum dikembalikan";
const desc = "Kembalikan alat untuk mengambil koin";
const mockdatafortable = {
    status: 'ok',
    meta: {
        count: 8
    },
    data: [
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Bengkel TGP',
            tgl_pinjam: '19 Juli 2018'
        },
        {
            alat: 'Palu',
            lokasi_peminjaman: 'Kantor Sarpras',
            tgl_pinjam: '19 Juli 2018'
        }
    ]
};

const btn_data = [
    {
        toLink: '/components/icons',
        icon: 'pe-7s-plugin',
        title: 'Test Button'
    },
    {
        toLink: '/nfc_wait',
        icon: 'pe-7s-plugin',
        title: 'Ke NFC Page'
    },
];

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <UserCards {...propr}/>
        </div>
        <div className="col-md-6">
            <UserCards {...proprforkompen}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Table data={mockdatafortable} category={desc} title={title}/>
        </div>
      </div>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h3 className="title">Quick Links</h3>
                        <p className="category">Shortcut ke halaman penting</p>
                    </div>
                    <div className="content all-icons">
                        <QuickLinks datums={btn_data} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

export default Dashboard;