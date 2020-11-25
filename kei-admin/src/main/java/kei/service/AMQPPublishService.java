package kei.service;

import kei.domain.common.QueueMessage;

public interface AMQPPublishService {

	/**
	 * message 전송
	 * @param queueMessage
	 */
	public void send(QueueMessage queueMessage);
}
