import React, { useState } from 'react';

import arrowDown from '../../assets/images/icons/arrow-down-left.svg';
import arrowUp from '../../assets/images/icons/arrow-up-right.svg';
import xlsIcon from '../../assets/images/icons/xls.svg';
import { formatCurrency } from '../../helpers';
import {
  ButtonBlock,
  DownloadButton,
  ScrollWrapper,
  ShowMoreButton,
  Table,
  Td,
  TdProfit,
  Th,
} from './styles';

const MoneyList = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => setVisibleCount((prev) => prev + 10);

  const handleDownloadXLS = () => {
    const headers = ['Дата', 'Тип', 'Название', 'Сумма', 'Комиссия', 'Зачислено', 'Адресат'];
    const rows = items.map((item) => [
      item.date,
      item.type,
      item.name,
      `${item.amount}₽`,
      `${item.commission}₽`,
      `${item.credited > 0 ? '+' : ''}${item.credited}₽`,
      item.email,
    ]);

    let xlsContent = `
          <html>
            <head>
              <meta charset="UTF-8">
            </head>
            <body>
              <table border="1">
                <tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr>
                ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
              </table>
            </body>
          </html>
        `;

    const blob = new Blob([xlsContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'money-list.xls';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <ScrollWrapper>
        <Table>
          <thead style={{ height: '50px' }}>
            <tr>
              <Th width="100px">Дата</Th>
              <Th width="120px">Тип</Th>
              <Th width="180px">Название</Th>
              <Th width="100px">Сумма</Th>
              <Th width="100px">Комиссия</Th>
              <Th width="100px">Зачислено</Th>
              <Th width="220px">Адресат</Th>
            </tr>
          </thead>
          <tbody>
            {items.slice(0, visibleCount).map((item, i) => (
              <tr key={i}>
                <Td>{item.date}</Td>
                <Td style={{ color: item.type === 'Вывод средств' ? '#7D829D' : '#419957' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <img
                      src={item.type === 'Вывод средств' ? arrowDown : arrowUp}
                      alt="arrow"
                      style={{ width: 14, height: 14 }}
                    />
                    {item.type}
                  </span>
                </Td>

                <Td>{item.name}</Td>
                <Td>{formatCurrency(item.amount)}</Td>
                <Td>{formatCurrency(item.commission)}</Td>
                <TdProfit>
                  <span
                    style={{
                      color: item.credited > 0 ? '#419957' : '#7D829D',
                      backgroundColor: item.credited > 0 ? '#121c15' : '#18191C',
                    }}
                  >
                    {item.credited > 0 ? '+' : ''}
                    {formatCurrency(item.credited)}
                  </span>
                </TdProfit>
                <Td>{item.email}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollWrapper>
      <ButtonBlock>
        <DownloadButton onClick={handleDownloadXLS}>
          <img src={xlsIcon} alt="xls" />
          Скачать в XLS
        </DownloadButton>

        {visibleCount < items.length && (
          <ShowMoreButton onClick={handleShowMore}>Показать все ссылки</ShowMoreButton>
        )}
      </ButtonBlock>
    </>
  );
};

export default MoneyList;
