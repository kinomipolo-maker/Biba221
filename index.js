export default defineComponent({
  async run({ steps, $ }) {
    
    // Генерируем случайное число от -20 до 30
    const size = Math.floor(Math.random() * 51) - 20;
    const absSize = Math.abs(size);
    
    // Формируем сообщение
    let message = `, твоя биба: ${absSize} см! `;
    
    if (size <= -10) message += "Пупупу, в другой раз повезет?!";
    else if (size <= 0) message += "Эй, ты! Да, ты! сожалею тебе!";
    else if (size <= 5) message += "Ха-ха! Ну хоть что-то!";
    else if (size <= 10) message += "Ну… хотя бы не минус. Та и тут вроде холодно!";
    else if (size <= 20) message += "Мужик, ты валыну убери!";
    else if (size <= 25) message += "Сожалею, неудобно наверное...";
    else message += "Ого! Ты сбил счетчик!";
    
    // Возвращаем результат
    return message;
  }
})
