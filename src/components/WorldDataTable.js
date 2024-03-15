import React from 'react';
import US from "../assets/images/US.webp"
import GER from "../assets/images/ger.webp"
import UK from "../assets/images/UK.webp"
import AUS from "../assets/images/AU.webp"
import RO from "../assets/images/RO.png"
import BR from "../assets/images/BR.webp"

export const Worlddata = [
    { image: US, country: 'USA', value: 2920, percentage: '53.23%' },
    { image: GER, country: 'Germany', value: 1300, percentage: '20.43%' },
    { image: AUS, country: 'Australia', value: 760, percentage: '10.35%' },
    { image: UK, country: 'United Kingdom', value: 690, percentage: '7.87%' },
    { image: RO, country: 'Romania', value: 600, percentage: '5.94%' },
    { image: BR, country: 'Brazil', value: 550, percentage: '4.34%' }
];

const WorldDataTable = () => {
    return (
        <table className='w-100'>
            <tbody>
                {Worlddata.map((item, index) => (
                    <React.Fragment key={index}>
                        <tr style={{ justifyContent: 'space-between', display: 'flex' }}>
                            <td><img src={item.image} alt={item.country} /></td>
                            <td>{item.country}</td>
                            <td>{item.value}</td>
                            <td >{item.percentage}</td>
                        </tr>

                        {index < Worlddata.length - 1 && (
                            <tr className="divider-row">
                                <td colSpan="4"><hr className="text-dark d-none d-sm-block mx-3" /></td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}

export default WorldDataTable;
