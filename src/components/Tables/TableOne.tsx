import { BRAND } from '../../types/brand';

const brandData: BRAND[] = [
  {
    location : 12344,
    visitors: 'Lorem ipsum dolor sit amet, co',
    revenues: '5,768',
    sales: 590
  },
  {
    location : 12344,
    visitors: 'Lorem ipsum dolor sit amet, co',
    revenues: '4,635',
    sales: 467
  },
  {
    location : 12344,
    visitors: 'Lorem ipsum dolor sit amet, co',
    revenues: '4,290',
    sales: 420
  },
  {
    location : 12344,
    visitors: 'Lorem ipsum dolor sit amet, co',
    revenues: '3,580',
    sales: 389
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Location Leads List
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Location ID
            </h5>
          </div>
          <div className="p-2.5 grid-cols-8 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Location name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total loads
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              From Social
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.location}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
