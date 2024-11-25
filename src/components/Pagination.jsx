import { Button, Flex, Text } from '@chakra-ui/react';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

export default function Pagination({ itemCount, pageSize, currentPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);

  // Если страниц меньше или равно одной, пагинация не требуется
  if (pageCount <= 1) {
    return null;
  }

  const changePage = (page) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <Flex align="center" gap="2" mt="2">
      {/* Текущая страница и общее количество страниц */}
      <Text size="sm">
        Page {currentPage} of {pageCount}
      </Text>

      {/* Первая страница */}
      <Button
        isDisabled={currentPage === 1}
        onClick={() => changePage(1)}
        size="sm"
      >
        <BsChevronDoubleLeft />
      </Button>

      {/* Предыдущая страница */}
      <Button
        isDisabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        size="sm"
      >
        <BsChevronLeft />
      </Button>

      {/* Следующая страница */}
      <Button
        isDisabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
        size="sm"
      >
        <BsChevronRight />
      </Button>

      {/* Последняя страница */}
      <Button
        isDisabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
        size="sm"
      >
        <BsChevronDoubleRight />
      </Button>
    </Flex>
  );
}
