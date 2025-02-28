import {salesData} from "../data";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
const chart = () => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Entrate Mensili</h2>
        {/*Il grafico sarà responsivo, quindi si adatterà automaticamente alla dimensione dello schermo.*/}
            <ResponsiveContainer width="100%" height={300}>
               {/*Crea un grafico a linee e usa salesData come dati.*/}
        <LineChart data={salesData}>
        {/*
XAxis usa month come etichetta (Gen, Feb, Mar, ecc.).
YAxis crea l’asse verticale per i valori.
        */}

          <XAxis dataKey="month" />
          <YAxis />
          {/*Tooltip mostra i valori quando passi sopra il grafico.*/}
          <Tooltip />
          {/*CartesianGrid aggiunge una griglia grigia (stroke="#ccc") per aiutare la lettura.*/}
          <CartesianGrid stroke="#ccc" />
          {/*
          Line disegna la linea del grafico.
          dataKey="revenue" usa i dati di salesData per tracciare le entrate.
          stroke="#007bff" usa il colore blu per la linea.
        strokeWidth={2} rende la linea più spessa.
         dot={{ r: 4 }} mostra punti più visibili.
activeDot={{ r: 8 }} ingrandisce i punti quando passi sopra.
         */}
          <Line type="monotone" dataKey="revenue" stroke="#007bff" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
export default chart;

/*
I dati di salesData vengono passati a LineChart.
Viene disegnato un grafico con:
Asse X con i mesi.
Asse Y con le entrate.
Linea blu che mostra le entrate mensili.
Tooltip per mostrare i valori al passaggio del mouse.
*/