import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import emptyLinkIcon from '../../assets/images/icons/empty-link.svg';
import linkIcon from '../../assets/images/icons/link.svg';
import AnalyticsBlock from '../../components/AnalyticsBlock';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';
import { formatCurrency } from '../../helpers';
import { statsData } from '../../mocks/statsData';
import {
  BackButton,
  BlocksGrid,
  Header,
  ScrollWrapper,
  Table,
  Td,
  TdCenter,
  TdLink,
  TdProfit,
  Th,
  Title,
} from './styles';

export const statsMock = [
  {
    id: 'telegram_subscribers',
    title: 'Блок №1',
    subtitle: 'Подписавшиеся на Телеграм-канал',
    icon: require('../../assets/images/telegram.png'),
  },
  {
    id: 'video_1_views',
    title: 'Блок №2',
    subtitle: 'Просмотревшие первый видео-урок',
    icon: require('../../assets/images/camera-1.png'),
  },
  {
    id: 'video_2_views',
    title: 'Блок №3',
    subtitle: 'Просмотревшие второй видео-урок',
    icon: require('../../assets/images/camera-2.png'),
  },
  {
    id: 'video_3_views',
    title: 'Блок №4',
    subtitle: 'Просмотревшие третий видео-урок',
    icon: require('../../assets/images/camera-3.png'),
  },
  {
    id: 'video_4_views',
    title: 'Блок №5',
    subtitle: 'Просмотревшие четвертый видео-урок',
    icon: require('../../assets/images/camera-4.png'),
  },
  {
    id: 'special_offer',
    title: 'Блок №6',
    subtitle: 'Получившие специальный оффер',
    icon: require('../../assets/images/users.png'),
  },
];

const Analytics = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedLinkId, setCopiedLinkId] = useState(null);
  const links = useSelector((state) => state.links.items);

  const link = links.find((item) => +item.id === +id);

  const mergedStats = statsMock.map((item) => ({
    ...item,
    ...statsData[item.id],
  }));

  const handleCopy = (url, id) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopiedLinkId(id);
          setTimeout(() => setCopiedLinkId(null), 1500);
        })
        .catch(() => fallbackCopy(url, id));
    } else {
      fallbackCopy(url, id);
    }
  };

  const fallbackCopy = (text, id) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopiedLinkId(id);
        setTimeout(() => setCopiedLinkId(null), 1500);
      }
    } catch (err) {
      console.error('Fallback: Copy failed', err);
    }

    document.body.removeChild(textarea);
  };

  return link ? (
    <>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <img src={backIcon} alt="Назад" width={13} height={13} />
          <span>Вернуться</span>
        </BackButton>
        <Title>Сквозная аналитика ссылки</Title>
      </Header>
      <ScrollWrapper>
        <Table>
          <thead style={{ height: '50px' }}>
            <tr>
              <Th $center width="40px">
                №
              </Th>
              <Th width="130px">Название</Th>
              <Th width="220px">Ссылка</Th>
              <Th width="100px">Источник</Th>
              <Th width="100px">
                <span className="th-content">Дата</span>
              </Th>
              <Th width="120px">
                <span className="th-content">Регистраций</span>
              </Th>
              <Th width="100px">
                <span className="th-content">Стоимость</span>
              </Th>
              <Th width="100px">
                <span className="th-content">Прибыль</span>
              </Th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <TdCenter>1</TdCenter>
              <Td>{link.name}</Td>
              <TdLink>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.url}
                </a>
                <img
                  src={linkIcon}
                  alt="copy"
                  className={copiedLinkId === link.id ? 'copied' : ''}
                  onClick={() => handleCopy(link.url, link.id)}
                />
              </TdLink>
              <Td>{link.source}</Td>
              <Td>{link.date}</Td>
              <Td>{link.registrations}</Td>
              <Td>{formatCurrency(link.cost)}</Td>
              <TdProfit>
                <span>{'+' + formatCurrency(link.profit)}</span>
              </TdProfit>
            </tr>
          </tbody>
        </Table>
      </ScrollWrapper>
      <BlocksGrid>
        {mergedStats.map((stat, i) => (
          <AnalyticsBlock key={i} {...stat} />
        ))}
      </BlocksGrid>
    </>
  ) : (
    <EmptyPlaceholder icon={emptyLinkIcon} count={0} title="Ссылка не найдена" />
  );
};

export default Analytics;
